import { Box } from '@mui/material'
import React from 'react'
import MainHead from './MainHead'
import MainContents from './MainContents'
import MainOrder from './MainOrder'

export default function Main() {
  return (
    <Box>
        <MainHead />
        <MainContents />
        <MainOrder />
    </Box>
  )
}
