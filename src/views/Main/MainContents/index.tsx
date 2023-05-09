import { useState } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Pagination, Popover, Typography } from '@mui/material';
import { relative } from 'path';

interface IMenuOption {
  id: number;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  price: number;
}

interface IMenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  options: IMenuOption[];
  
}

export default function MainContents() {

  const [menuList, setMenuList] = useState<IMenuItem[]>([
    {
      id: 1,
      name: 'Menu 1',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000002407]_20210225095106743.jpg',
      options: [{ id: 1, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 2,
      name: 'Menu 2',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg',
      options: [{ id: 2, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 3,
      name: 'Menu 3',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg',
      options: [{ id: 3, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 4,
      name: 'Menu 4',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg',
      options: [{ id: 4, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 5,
      name: 'Menu 5',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000002093]_20210225094415504.jpg',
      options: [{ id: 5, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 6,
      name: 'Menu 6',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002672]_20220311105511600.jpg',
      options: [{ id: 6, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 7,
      name: 'Menu 7',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/03/[9200000004559]_20230320090452696.jpg',
      options: [{ id: 7, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
    {
      id: 8,
      name: 'Menu 8',
      price: 1000,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg',
      options: [{ id: 8, name1: "Regular", name2: "Large", name3: "샷추가1", name4: "샷추가2", price: 300 }],
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState<IMenuItem | null>(null);

  const { productList, viewList, pageNumber, setProductList, onPageHandler, COUNT } = usePagingHook(12);

  const handleMenuClick = (menu: IMenuItem) => {
    setSelectedMenu(menu);
  };

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
              <Card>
                <CardMedia component='img' image={selectedMenu.imageUrl}></CardMedia> 
              </Card>
              <Typography variant="h5" sx={{m:'10px 10px'}}>{selectedMenu.name}</Typography>
              <Typography variant="h6" sx={{ml:'10px'}}>{selectedMenu.price}원</Typography>
              <Divider sx={{mt: '10px'}} />
              <List>
                {selectedMenu.optionDetail.map((option) => (
                  <ListItem key={option.id}>
                    <Box>
                      <Typography display='block' sx={{ mb: '10px' }}>SIZE</Typography>
                      <Box component='button' sx={{ width: '100px', height: '100px', backgroundColor: '#2E8B57', borderColor: '#FFFFFF', color: '#FFFFFF' }}>
                        <ListItemText primary={option.name1} />
                        <Typography>{option.price}원</Typography>
                      </Box>
                      <Box component='button' sx={{ ml: '10px', width: '100px', height: '100px', backgroundColor: '#2E8B57', borderColor: '#FFFFFF', color: '#FFFFFF' }} >
                        <ListItemText primary={option.name2} />
                        <Typography>{option.price}원</Typography>
                      </Box>
                      <Box sx={{ mt: '20px' }}>
                        <Typography display='block' sx={{ mb: '10px' }}>추가</Typography>
                        <Box component='button' sx={{ width: '100px', height: '100px', backgroundColor: '#2E8B57', borderColor: '#FFFFFF', color: '#FFFFFF' }}>
                          <ListItemText primary={option.name3} />
                          <Typography>{option.price}원</Typography>
                        </Box>
                        <Box component='button' sx={{ ml: '10px', width: '100px', height: '100px', backgroundColor: '#2E8B57', borderColor: '#FFFFFF', color: '#FFFFFF' }} >
                          <ListItemText primary={option.name4} />
                          <Typography>{option.price}원</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mt: '50px' }}>
                        <Box component='button' sx={{ width: '150px' }}>
                          <Typography>주문담기</Typography>
                        </Box>
                        <Box component='button' sx={{ ml: '12px' }}>
                          <Typography>취소</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Drawer>
        <Grid container spacing={4}>
          {menuList.map((menu) => (
            <Grid item key={menu.id} xs={12} sm={6} md={3} lg={2} xl={2}>
              <Card sx={{ height: '100%' }} onClick={() => handleMenuClick(menu)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={menu.imageUrl}
                    alt={menu.name}
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
          <Pagination color="primary" page={pageNumber} count={getPageCount(productList, COUNT)} onChange={(event, value) => onPageHandler(value)}/>
        </Box>
      </Box>
    </Box>
  )
}
