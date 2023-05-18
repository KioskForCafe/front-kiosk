import React, { useEffect, useState } from 'react'

import { Box, Button, Grid, Typography } from '@mui/material'

import { GetOrderResponse } from 'src/apis/response/order';
import axios, { AxiosResponse } from 'axios';
import ResponseDto from 'src/apis/response';
import { GET_ORDER_LIST_URL } from 'src/apis/constants/api';

export default function MyPageContents() {

    //          Hook          //
    const [orderLogList, setOrderLogList] = useState<GetOrderResponse[]>([]);

    //          Event Handler          //
    const getOrderLogListHandler = () => {
        axios.get(GET_ORDER_LIST_URL(1))
        .then((response) => getOrderLogListResponseHandler(response))
        .catch((error) => getOrderLogListErrorHandler(error))
    }

    //          Response Handler          //
    const getOrderLogListResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<GetOrderResponse[]>

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
        getOrderLogListHandler();
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
