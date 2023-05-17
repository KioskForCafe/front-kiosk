import React, { useState } from 'react'

import { Box, Button, Grid, Typography } from '@mui/material'

import { IOrderLog } from 'src/interfaces';
import { ORDERLOG } from 'src/mock';

export default function MyPageContents() {

    const [orderLog, setOrderLog] = useState<IOrderLog[]>(ORDERLOG);

  return (
    <Grid container spacing={2}>
        {orderLog.map((order) => (
            <Grid item xs={12} key={order.orderId}>
                <Button fullWidth sx={{ p: '16px', border: '1px solid #ccc', borderRadius: '4px'}}>
                    <Typography variant='h6'>주문 번호: {order.orderId} </Typography>
                    <Typography>주문 날짜: {order.createdAt}</Typography>
                </Button>
            </Grid>
        ))}
    </Grid>
  )
}
