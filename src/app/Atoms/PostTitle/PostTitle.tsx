import React from 'react'
import { PostTitleProps } from './postTitle.type'
import { Box } from '@mui/material'

function PostTitle({ title }: PostTitleProps) {
  return (
    <Box component={'h2'}>{title}</Box>
  )
}

export default PostTitle