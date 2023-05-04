import { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';


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

  return (
    <Box sx={{ p: '40px 17vw', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
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
                  />
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
