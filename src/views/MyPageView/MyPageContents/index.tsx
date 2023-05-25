import React, { useEffect, useState } from 'react'

import { Button, Grid, Typography } from '@mui/material'

import { GetOrderResponseDto } from 'src/apis/response/order';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse } from 'axios';
import ResponseDto from 'src/apis/response';
import { GET_ORDER_LIST_URL, authorizationHeader } from 'src/apis/constants/api';
import { useNavigate } from 'react-router-dom';

export default function MyPageContents() {

    //          Hook          //
    const [ cookies ] = useCookies();
    const navigator = useNavigate();

    const [orderLogList, setOrderLogList] = useState<GetOrderResponseDto[]>([]);

    //          Event Handler          //
    const getOrderLogListHandler = (accessToken: string) => {
        axios.get(GET_ORDER_LIST_URL(1), authorizationHeader(accessToken))
        .then((response) => getOrderLogListResponseHandler(response))
        .catch((error) => getOrderLogListErrorHandler(error))
    }

    //          Response Handler          //
    const getOrderLogListResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<GetOrderResponseDto[]>

        if (!result || !data) {
            alert(message)
            return;
        }

        setOrderLogList(data);
        console.log(data);
        console.log(orderLogList);
    }

    //          Error Handler          //
    const getOrderLogListErrorHandler = (error: any) => {
        console.log(error.message);
    }

    //          Use Effect          //
    useEffect(() => {
        const accessToken = cookies.accessToken;
        //? 로그인이 되어있지 않으면 로그인 페이지로 이동
        if (!accessToken) {
            navigator('/auth');
        }
        getOrderLogListHandler(accessToken);
    }, [])

  return (
    <Grid container spacing={2}>
        {orderLogList.map((order) => (
            <Grid item xs={12} key={order.orderId}>
                <Button fullWidth sx={{ p: '16px', border: '1px solid #ccc', borderRadius: '4px'}}>
                    <Typography variant='h6'>주문 번호: {order.orderId} </Typography>
                    <Typography variant='h6'>총 가격: {order.totalPrice} </Typography>
                    <Typography>주문 날짜: {order.updatedAt}</Typography>
                </Button>
            </Grid>
        ))}
    </Grid>
  )
}
