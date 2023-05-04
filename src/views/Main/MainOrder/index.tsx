import { Box, Button, Card, CardActionArea, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ClearIcon from '@mui/icons-material/Clear';

import React from 'react'

export default function MainOrder() {

    // const flag = false;
  return (
    <Box sx={{ p: '20px 80px', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <Box sx={{display: 'flex'}}>
            <Card variant='outlined' sx={{display:'flex', flex:2, width: '150px', height: '240px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                {/* {flag ? 
                    (<Typography sx={{ fontSize: '15px', fontWeight: 300 }}>메뉴를 추가해 주세요.</Typography>)
                :(<Box></Box>)} */}
                <Box sx={{display:'flex', flex:1, flexDirection: 'column'}}>
                    <Box sx={{display:'flex', flex:1, height: '36px', backgroundColor: '#E6E6FA', alignItems:'center'}}>
                        <Box sx={{flex:1, ml: '10px'}}>에스프레소</Box>
                        <Box sx={{display:'flex', mr: '10px', alignItems:'center'}}>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <RemoveRoundedIcon />
                            </Button>
                            <Typography sx={{ ml: '10px', mr: '10px' }}>2</Typography>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <AddRoundedIcon />
                            </Button>
                        </Box>
                        <Box sx={{ml: '20px', mr: '20px', pr: '20px', width: '10px'}}>7,000</Box>
                        <Button sx={{ fontSize: "small" }}>
                            <ClearIcon />
                        </Button>
                    </Box>
                    <Box sx={{display:'flex', flex:1, height: '36px', backgroundColor: '#FFFFF0', alignItems:'center'}}>
                        <Box sx={{flex:1, ml: '10px'}}>카페라떼</Box>
                        <Box sx={{display:'flex', mr: '10px', alignItems:'center'}}>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <RemoveRoundedIcon />
                            </Button>
                            <Typography sx={{ ml: '10px', mr: '10px' }}>3</Typography>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <AddRoundedIcon />
                            </Button>
                        </Box>
                        <Box sx={{ml: '20px', mr: '20px', pr: '20px', width: '10px'}}>10,500</Box>
                        <Button sx={{ fontSize: "small" }}>
                            <ClearIcon />
                        </Button>
                    </Box>
                    <Box sx={{display:'flex', flex:1, height: '36px', backgroundColor: '#E6E6FA', alignItems:'center'}}>
                        <Box sx={{flex:1, ml: '10px'}}>에스프레소</Box>
                        <Box sx={{display:'flex', mr: '10px', alignItems:'center'}}>
                            <Button sx={{ minWidth: '20px', height:'20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <RemoveRoundedIcon />
                            </Button>
                            <Typography sx={{ ml: '10px', mr: '10px' }}>2</Typography>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <AddRoundedIcon />
                            </Button>
                        </Box>
                        <Box sx={{ml: '20px', mr: '20px', pr: '20px', width: '10px'}}>7,000</Box>
                        <Button sx={{ fontSize: "small" }}>
                            <ClearIcon />
                        </Button>
                    </Box>
                    <Box sx={{display:'flex', flex:1, height: '36px', backgroundColor: '#FFFFF0', alignItems:'center'}}>
                        <Box sx={{flex:1, ml: '10px'}}>카페라떼</Box>
                        <Box sx={{display:'flex', mr: '10px', alignItems:'center'}}>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <RemoveRoundedIcon />
                            </Button>
                            <Typography sx={{ ml: '10px', mr: '10px' }}>3</Typography>
                            <Button sx={{ minWidth: '20px', height: '20px', color: '#FFFFFF', backgroundColor: '#7B68EE' }}>
                                <AddRoundedIcon />
                            </Button>
                        </Box>
                        <Box sx={{ml: '20px', mr: '20px', pr: '20px', width: '10px'}}>10,500</Box>
                        <Button sx={{ fontSize: "small" }}>
                            <ClearIcon />
                        </Button>
                    </Box>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', flexDirection:'column' , width:'30px', backgroundColor: '#FFFFFF'}}>
                    <Button sx={{flex:1, height: '10px', width: '15px' }}>
                        <KeyboardArrowUpOutlinedIcon />
                    </Button>
                    <Button sx={{flex:1, height: '10px', width: '15px' }}>
                        <KeyboardArrowDownOutlinedIcon/>
                    </Button>          
                </Box>
            </Card>
            <Box sx={{ height: '360px', ml: '30px'}}>
                <Typography variant='h6' sx={{ fontSize: '25px', color: '#00008B' }}>총 결제</Typography>
                <Typography variant='h6' sx={{ fontSize: '25px', color: '#00008B' }}>$ 00,000원</Typography>               
                <Box sx={{ m: '40px 0px'}}>
                    <Button variant='contained' sx={{ mt: '30px', width: '150px', height: '90px', backgroundColor: '#00008B' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 300 }}>결제</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>

    </Box>

  )
}

