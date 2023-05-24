import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from 'src/stores';

export default function MyPageHead() {

    const navigator = useNavigate();

    const {user, resetUser, setUser} = useUserStore();

  return (
    <Box sx={{ p: '40px 120px', display: 'flex' }}>
        <Box>
            <IconButton>
                <Avatar sx={{ height: '120px', width: '120px'}} alt={user?.userName} />
            </IconButton>
        </Box>
        <Box sx={{ ml: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 500, color: 'rgba(0, 0, 0, 0.7)' }}>{user?.userName}</Typography>    
            </Box>  
            <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0, 0, 0, 0.4)' }}>{user?.userEmail}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '40px 120px' }}>
          <Button variant='text' onClick={() => navigator('/patch/user')}>회원 정보 수정</Button>
        </Box>
    </Box>
  )
}
