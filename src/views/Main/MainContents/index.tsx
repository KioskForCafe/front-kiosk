import { useState } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { IMenuItem } from 'src/interfaces';
import { usePagingHook } from 'src/hooks';
import { getPageCount } from 'src/utils';

export default function MainContents() {

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
                <CardMedia component='img' image={selectedMenu.menuImgUrl}></CardMedia> 
              </Card>
              <Typography variant="h5" sx={{m:'10px 10px'}}>{selectedMenu.menuName}</Typography>
              <Typography variant="h6" sx={{ml:'10px'}}>{selectedMenu.menuPrice}원</Typography>
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
          {viewList.map((menu) => (
            <Grid item key={menu.menuId} xs={12} sm={6} md={3} lg={2} xl={2}>
              <Card sx={{ height: '100%' }} onClick={() => handleMenuClick(menu)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={menu.menuImgUrl}
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
          <Pagination color="primary" page={pageNumber} count={getPageCount(productList, COUNT)} onChange={(event, value) => onPageHandler(value)}/>
        </Box>
      </Box>
    </Box>
  )
}
