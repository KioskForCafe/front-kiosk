import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse } from 'axios';
import { GET_STORE_URL } from 'src/apis/constants/api';
import ResponseDto from 'src/apis/response';
import { GetStoreResponseDto } from 'src/apis/response/store';
export default function NavigationBar() {

    const navigator = useNavigate();
    const path = useLocation();

    const { user, resetUser, setUser } = useUserStore();
    const [ cookies, setCookies ] = useCookies();

    const [storeName, setStoreName] = useState<string>('');

    //          Event Handler            //
    const onLogoutHandler = () => {
        setCookies('accessToken', '', { expires: new Date(), path: '/' });
        resetUser();
        navigator('/');
    }

    useEffect(() => {
        axios.get(GET_STORE_URL)
        .then((response) => getStoreResponseHandler(response))
        .catch((error) => getStoreErrorHandler(error))
    }, [])

    const getStoreResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<GetStoreResponseDto>;
        if (!result || !data) {
            alert(message);
            return;
        }

        setStoreName(data.storeName);
    }

    const getStoreErrorHandler = (error: any) => {
        console.log(error.message);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar variant='outlined' position="static" sx={{ p: '20px 80px', backgroundColor: '#ffffff' }} >
                <Box>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button>
                            <HomeIcon sx={{ fontSize: '30px', color: '#008B8B' }} onClick={() => navigator('/')} />
                        </Button>
                        <Typography variant="h6" sx={{ color: '#000000' }}>
                            {storeName}
                        </Typography>
                        {path.pathname !== '/auth' && (user ?
                            (
                                <Box>
                                    <Button variant='contained' sx={{ backgroundColor: '#008B8B' }} onClick={() => navigator('/mypage')}>
                                    마이페이지
                                    </Button>
                                    <Button variant='contained' sx={{ backgroundColor: '#008B8B' }} onClick={onLogoutHandler}>
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
