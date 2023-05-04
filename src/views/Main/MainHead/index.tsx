import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function MainHead() {
  return (
    <Box sx={{ m: '20px 20px', p: '40px 120px', display: 'flex', justifyContent: 'space-between' }}>
      <Button variant='text' size='large' sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>Category 1</Button>
      <Button variant='text' size='large' sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>Category 2</Button>
      <Button variant='text' size='large' sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>Category 3</Button>
      <Button variant='text' size='large' sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>Category 4</Button>
    </Box>
  )
}
