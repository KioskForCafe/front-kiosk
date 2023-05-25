import { useEffect, useState } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { usePagingHook } from 'src/hooks';
import { getPageCount } from 'src/utils';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { GET_CATEGORY_LIST_URL, GET_MENU_DETAIL_URL, GET_MENU_LIST_URL } from 'src/apis/constants/api';
import ResponseDto from 'src/apis/response';
import { GetCategoryResponseDto } from 'src/apis/response/category';
import { GetMenuDetailResponseDto, GetMenuResponseDto } from 'src/apis/response/menu';

import { useSelectedMenuStore, useStoresStore } from 'src/stores';
import { Option, SelectedMenu } from 'src/interfaces/SelectedMenu.interface';


export default function MainContents() {

  //          Hook          //
  const navigator = useNavigate();
  const {store} = useStoresStore();

  const [categoryList, setCategoryList] = useState<GetCategoryResponseDto[]>([]);
  const [menuList, setMenuList] = useState<GetMenuResponseDto[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<GetMenuDetailResponseDto | null>(null);
  const [optionList, setOptionList] = useState<Option[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { addSelectedMenuList } = useSelectedMenuStore();

  const { productList, pageNumber, setProductList, onPageHandler, COUNT } = usePagingHook(12);

  //          Event Handler          //

  const optionClickHandler = (option: Option) => {
    if (!selectedMenu) return;

    let selectedOptionList = [];

    const existed = optionList.findIndex((item) => item.optionId === option.optionId);
    if (existed !== -1) {
      selectedOptionList = optionList.filter(item => item.optionId !== option.optionId);
      setOptionList(selectedOptionList);
    }
    else {
      selectedOptionList = optionList.map(option => option);
      selectedOptionList.push(option);
      setOptionList(selectedOptionList);
    }

    let total = 0;
    selectedOptionList.forEach((option) => {total += option.optionPrice});
    total += selectedMenu.menuPrice;

    console.log(selectedOptionList);
    console.log(total);
    setTotalPrice(total);
  }

  const getCategoryHandler = () => {
    if(!store) return;
    axios.get(GET_CATEGORY_LIST_URL(store?.storeId))
      .then((response) => getCategoryResponseHandler(response))
      .catch((error) => getCategoryErrorHandler(error));
  }

  const getMenuListHandler = (data: GetCategoryResponseDto) => {
    console.log('handleCategoryClick');
    if(!store) return;
    axios.get(GET_MENU_LIST_URL(store?.storeId, data.categoryId))
      .then((response) => getMenuReseponseHandler(response))
      .catch((error) => getMenuErrorHandler(error));
  };

  const getMenuDetailHandler = (data: GetMenuResponseDto) => {
    console.log('getMenuDetailHandler')
    axios.get(GET_MENU_DETAIL_URL(data.menuId))
      .then((response) => getMenuDetailResponseHandler(response))
      .catch((error) => getMenuDetailErrorHandler(error));
  };

  const onMainOrderHandler = () => {
    
    if (!selectedMenu) return;

    const menu: SelectedMenu = {
      menuId: selectedMenu.menuId,
      menuName: selectedMenu.menuName,
      menuCount: 1,
      menuPrice: totalPrice,
      optionList,
    };
    
    addSelectedMenuList(menu);
    setSelectedMenu(null);
  }

  //          Response Handler          //

  const getCategoryResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<GetCategoryResponseDto[]>
    if (!result || !data) {
      alert(message);
      navigator('/');
      return;
    }
    setCategoryList(data);
    console.log(data);
    console.log(categoryList);

  }

  const getMenuReseponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<GetMenuResponseDto[]>
    if (!result || !data) {
      alert(message);
      navigator('/');
      return;
    }
    setMenuList(data);
    console.log(data);
    console.log(menuList);
  }

  const getMenuDetailResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<GetMenuDetailResponseDto>
    if (!result || !data) {
      alert(message);
      return;
    }
    setSelectedMenu(data);
    setTotalPrice(data.menuPrice);
    console.log('selected menu');
    console.log(data);
  }

  //          Error Handler          //

  const getCategoryErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const getMenuErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const getMenuDetailErrorHandler = (error: any) => {
    console.log(error.message);
  }

  //          Use Effect          //
  useEffect(() => {
    getCategoryHandler();
  }, [])


  return (
    <Box sx={{ p: '10px 17vw', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <Box mt='2px'>
        <Drawer
          anchor='right'
          open={Boolean(selectedMenu)}
          onClose={() => setSelectedMenu(null)}
        >
          {selectedMenu && (
            <>
            <Box sx={{maxWidth: '240px'}}>
            <Card>
                <CardMedia component='img' height="150"
                  image={selectedMenu.menuImgUrl ? selectedMenu.menuImgUrl : ''}
                  alt={selectedMenu.menuName}
                  sx={{ objectFit: "cover", width: "100%" }}>
                </CardMedia>
            </Card>
              <Typography variant="h4" sx={{ m: '10px 10px' }}>{selectedMenu.menuName}</Typography>
              <Typography variant="h5" sx={{ ml: '10px' }}>{totalPrice}원</Typography>
              <Divider sx={{ mt: '10px' }} />
              <List>
                <Typography display='block' sx={{ m: '15px 14px', color: '#008B8B' }}>추가</Typography>
                {selectedMenu.optionList.map((option) => (
                  <Box 
                    component='button' 
                    sx={{ ml: '15px', mb: '15px', width: '98px', height: '98px', backgroundColor: '#008B8B', borderColor: '#FFFFFF', color: '#FFFFFF' }}
                    onClick={() => optionClickHandler(option)}
                  >
                    <Typography variant="h6">{option.optionName}</Typography>
                    <Typography sx={{ mt: '5px' }}>{option.optionPrice}원</Typography>
                  </Box>             
                ))}
                <Box sx={{ m: '20px 15px' }}>
                  <Box 
                  component='button'
                  onClick={() => onMainOrderHandler()}
                  sx={{ p: '4px 4px', width: '130px', backgroundColor: '#C0CA33', borderColor: '#FFFFFF', color: '#FFFFFF' }}>
                  주문담기
                  </Box>
                  <Box 
                  component='button' 
                  sx={{ p: '4px 4px', ml: '12px', width: '68px', backgroundColor: '#C0CA33', borderColor: '#FFFFFF', color: '#FFFFFF' }} onClick={() => setSelectedMenu(null)}>
                  취소
                  </Box>
                </Box>
              </List>
            </Box>
            </>
          )}
        </Drawer>
        <List sx={{ m: '20px', p: '40px', display: 'flex', justifyContent: 'space-between' }}>
          {categoryList?.map((category) => (
            <ListItem
              key={category.categoryId}
              button
              onClick={() => getMenuListHandler(category)}
              sx={{ flexGrow: 1, textAlign: 'center', mr: 2, backgroundColor: '#008B8B' }}
            >
              <ListItemText primary={category.categoryName} />
            </ListItem>
          ))}
        </List>
        <Grid container spacing={4}>
          {menuList.map((menu) => (
            <Grid item key={menu.menuId} xs={12} sm={6} md={3} lg={2} xl={2}>
              <Card sx={{ height: '100%' }} onClick={() => getMenuDetailHandler(menu)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={menu.menuImgUrl ? menu.menuImgUrl : ''}
                    alt={menu.menuName}
                    sx={{ objectFit: "cover", width: "100%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {menu.menuName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {menu.menuPrice}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: '40px', display: 'flex', justifyContent: 'center' }}>
          <Pagination color="primary" page={pageNumber} count={getPageCount(productList, COUNT)} onChange={(event, value) => onPageHandler(value)} />
        </Box>
      </Box>
    </Box>
  )
}

