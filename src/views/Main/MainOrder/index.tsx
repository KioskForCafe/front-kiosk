import { Box, Button, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'

export default function MainOrder() {
  return (
    <Box sx={{ p: '20px 80px', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Card variant='outlined' sx={{ flex:2, p: '120px 200px' }}>
                <Typography sx={{ fontSize: '15px', fontWeight: 300 }}>메뉴를 추가해 주세요.</Typography>
                <Box>

                </Box>
            </Card>
            <Box sx={{ flex:1, pt: '30px', textAlign:'end' }}>
                <Typography>총 가격</Typography>
                <Button variant='contained' sx={{width:'80%', backgroundColor: '#3B89FC' }}>
                    결제
                </Button>
            </Box>
        </Box>

    </Box>

  )
}

