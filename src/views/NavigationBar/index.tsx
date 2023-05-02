import React from 'react';

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Typography } from '@mui/material';
export default function NavigationBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar variant='outlined' position="static" sx={{flexDirection: 'row', p: '10px 80px', backgroundColor: '#ffffff' }} >
            <HomeIcon sx={{ color: '#FF9000'}}/>
            <Typography variant="h6" sx={{ flexGrow: 1, justifyContent: 'space-between', color: '#000000' }}>
                Logo / 매장명
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: '#FF9000' }}>
                로그인
            </Button>
        </AppBar>
    </Box>
  )
}
