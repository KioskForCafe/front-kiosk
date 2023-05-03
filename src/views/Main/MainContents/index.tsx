
import {useState} from 'react'

import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { IMenuItem } from 'src/interfaces';

interface Props {
    item: IMenuItem | any;
}

export default function MainContents({item}: Props) {
    const [menuList, setMenuList] = useState<IMenuItem[]>([]);
  return (
    <Box sx={{ p: '40px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Box mt='2px'>
            <Grid container spacing={4}>
                    {menuList.map((item) => (
                        <Grid item sm={12} md={4}>
                            <Card sx={{height: '100%'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        // image={item.menuImgUrl}
                                        alt={item.menuName} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            {item.menuName}
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary'>
                                            {item.menuPrice}
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
