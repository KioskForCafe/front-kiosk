import { useState } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Popover, Typography } from '@mui/material';

interface IMenuOption {
  id: number;
  name: string;
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
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 1, name: "샷 추가", price: 300 }],
    },
    {
      id: 2,
      name: 'Menu 2',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 2, name: "샷 추가", price: 300 }],
    },
    {
      id: 3,
      name: 'Menu 3',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 3, name: "샷 추가", price: 300 }],
    },
    {
      id: 4,
      name: 'Menu 4',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 4, name: "샷 추가", price: 300 }],
    },
    {
      id: 5,
      name: 'Menu 5',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 5, name: "샷 추가", price: 300 }],
    },
    {
      id: 6,
      name: 'Menu 6',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 6, name: "샷 추가", price: 300 }],
    },
    {
      id: 7,
      name: 'Menu 7',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 7, name: "샷 추가", price: 300 }],
    },
    {
      id: 8,
      name: 'Menu 8',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150',
      options: [{ id: 8, name: "샷 추가", price: 300 }],
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState<IMenuItem | null>(null);

  const handleMenuClick = (menu: IMenuItem) => {
    setSelectedMenu(menu);
  };

  return (
    <Box sx={{ p: '10px 17vw', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <Box mt='2px'>
        <Drawer
          anchor="right"
          open={Boolean(selectedMenu)}
          onClose={() => setSelectedMenu(null)}
        >
          {selectedMenu && (
            <>
              <Typography variant="h5">{selectedMenu.name}</Typography>
              <Typography variant="h6">{selectedMenu.price}원</Typography>
              <Divider />
              <List>
                {selectedMenu.options.map((option) => (
                  <ListItem key={option.id}>
                    <ListItemText primary={option.name} />
                    <Typography>{option.price}원</Typography>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Drawer>
        <Grid container spacing={4}>
          {menuList.map((menu) => (
            <Grid item key={menu.id} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }} onClick={() => handleMenuClick(menu)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={menu.imageUrl}
                    alt={menu.name}
                  />
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box sx={{ width: '240px', height: '400px' }}>
                      <Card sx={{ p: '10px 10px' }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="100"
                            image={menuItem.imageUrl}
                            alt={menuItem.name}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {menuItem.description}
                          </Typography>
                        </CardActionArea>
                      </Card>
                      <Box sx={{ mt: '10px' }}>
                        <Typography display='flex'>Size</Typography>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box component='button' sx={{ width: '80px', height: '80px', ml: '10px' }}>
                            <Typography>Reqular</Typography>
                          </Box>
                          <Box component='button' sx={{ width: '80px', height: '80px', ml: '10px' }}>
                            <Typography>Large</Typography>
                          </Box>
                        </Box>
                        <Typography display='flex'>추가</Typography>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box component='button' sx={{ width: '80px', height: '80px', ml: '10px' }}>
                            <Typography>1샷추가</Typography>
                          </Box>
                          <Box component='button' sx={{ width: '80px', height: '80px', ml: '10px' }}>
                            <Typography>2샷추가</Typography>
                          </Box>
                        </Box>
                      </Box>

                    </Box>
                  </Popover>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {menu.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {menu.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
