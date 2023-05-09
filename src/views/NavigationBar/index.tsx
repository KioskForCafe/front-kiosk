import React from 'react';

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/stores';
export default function NavigationBar() {

    const navigator = useNavigate();
    const path = useLocation();

    const { user } = useUserStore();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar variant='outlined' position="static" sx={{ p: '20px 80px', backgroundColor: '#ffffff' }} >
                <Box>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button>
                            <HomeIcon sx={{ fontSize: '30px', color: '#008B8B' }} onClick={() => navigator('/')} />
                        </Button>
                        <Typography variant="h6" sx={{ color: '#000000' }}>
                            Logo / 매장명
                        </Typography>
                        {/* <Button variant='contained' sx={{ backgroundColor: '#008B8B' }}>
                            로그인
                        </Button> */}
                        {path.pathname !== '/auth' && (user ?
                            (
                                <Button variant='outlined' sx={{ borderColor: '#008B8B', color: '#3CB371' }} onClick={() => navigator('/myPage')}>
                                    마이페이지
                                </Button>
                            ) : (
                                <Button variant='contained' sx={{ backgroundColor: '#008B8B' }} onClick={() => navigator('/auth')}>
                                    로그인
                                </Button>
                            )
                        )
                        }
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>
    )
}
