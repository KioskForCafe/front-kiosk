import { Box, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'

export default function MainContents() {
  return (
    <Box sx={{ p: '40px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Card variant='outlined'>
            <CardActionArea sx={{ p: '25px 0px', display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>글쓰기</Typography>
            </CardActionArea>
        </Card>

    </Box>
  )
}
