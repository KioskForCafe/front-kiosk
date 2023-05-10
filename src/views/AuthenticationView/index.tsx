import { Box, Card, Grid } from '@mui/material'
import { useState } from 'react'
import LoginCardView from './LoginCardView';
import SignUpCardView from './SignUpCardView';

export default function AuthenticationView() {

  const [loginView, setLoginView] = useState<boolean>(true);

  return (
    <Box sx={{pr: "120px", pl: "120px"}}>
      <Card sx={{width: '700px', height: '800px', mt: '100px', mb: '80px', p: '50px 50px'}}>
        {loginView ? (<LoginCardView setLoginView={setLoginView}/>): (<SignUpCardView setLoginView={setLoginView}/>)}
      </Card>
    </Box>
  )
}

