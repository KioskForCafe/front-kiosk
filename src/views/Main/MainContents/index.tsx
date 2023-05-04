import { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Popover, Typography } from '@mui/material';


interface IMenuItem {
  name: string;
  description: string;
  imageUrl: string;
}

export default function MainContents() {

  const [menuList, setMenuList] = useState<IMenuItem[]>([
    {
      name: 'Menu 1',
      description: 'Description for Menu 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 2',
      description: 'Description for Menu 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 3',
      description: 'Description for Menu 3',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 4',
      description: 'Description for Menu 4',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 5',
      description: 'Description for Menu 5',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 6',
      description: 'Description for Menu 6',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 7',
      description: 'Description for Menu 7',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Menu 8',
      description: 'Description for Menu 8',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    // navigator('');
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ p: '10px 17vw', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <Box mt='2px'>
        <Grid container spacing={4}>
          {menuList.map((menuItem, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={menuItem.imageUrl}
                    alt={menuItem.name}
                    onClick={handlePopoverOpen}
                  // onMouseLeave={handlePopoverClose}
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
                      {menuItem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {menuItem.description}
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
