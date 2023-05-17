import { Box } from '@mui/material'
import React from 'react'
import MyPageHead from './MyPageHead'
import MyPageContents from './MyPageContents'

export default function MyPageView() {
  return (
    <Box>
        <MyPageHead />
        <MyPageContents />
    </Box>
  )
}
