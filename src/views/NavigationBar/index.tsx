import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useStoresStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse } from 'axios';
import { GET_STORE_URL, authorizationHeader } from 'src/apis/constants/api';
import ResponseDto from 'src/apis/response';
import { GetStoreResponseDto } from 'src/apis/response/store';
export default function NavigationBar() {

    const navigator = useNavigate();
    const path = useLocation();

    const {store} = useStoresStore();
    const { user, resetUser, setUser } = useUserStore();
    const [cookies, setCookies] = useCookies();
    const {userId} = useParams();

    const [storeName , setStoreName] = useState<string>('스타벅스');

    const accessToken = cookies.accessToken;

    //          Event Handler            //

    const onHomeButtonHandler = () => {
        if(!store) return;
        navigator(`/${store.storeId}`)
    }

    const onLogoutHandler = () => {
        setCookies('accessToken', '', { expires: new Date(), path: '/' });
        resetUser();
        navigator('/');
    }

    useEffect(() => {
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar variant='outlined' position="static" sx={{ p: '20px 80px', backgroundColor: '#ffffff' }} >
                <Box>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button>
                            <HomeIcon sx={{ fontSize: '30px', color: '#008B8B' }} onClick={() => onHomeButtonHandler()} />
                        </Button>
                        <Typography variant="h6" sx={{ color: '#000000' }}>
                            {store ? store.storeName : '없는 매장입니다.'}
                        </Typography>
                        {path.pathname !== '/auth' && (user ?
                            (
                                <Box>
                                    <Button variant='contained' sx={{ backgroundColor: '#008B8B' }} onClick={() => navigator('/mypage')}>
                                        마이페이지
                                    </Button>
                                    <Button variant='contained' sx={{ ml: '10px', backgroundColor: '#008B8B' }} onClick={onLogoutHandler}>
                                        로그아웃
                                    </Button>
                                </Box>
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
