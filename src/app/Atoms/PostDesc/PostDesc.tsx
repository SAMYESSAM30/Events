import React from 'react'
import { PostDescProps } from './postDesc.type'
import { Box } from '@mui/material'

const PostDesc = ({ description }: PostDescProps) => {
  return (
    <Box component={'p'}>{description}</Box>
  )
}

export default PostDesc