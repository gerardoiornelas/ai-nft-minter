import React from "react"
import { Typography, Box } from "@mui/material"

interface Props {
  children: React.ReactNode
  textShadowColor: string
}

const SegmentTitle = ({ children, textShadowColor, ...otherProps }: Props) => {
  return (
    <Box mb={2}>
      <Typography
        variant="h4"
        color="secondary"
        {...otherProps}
        sx={{ textShadow: `${textShadowColor} 2px 2px` }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default SegmentTitle
