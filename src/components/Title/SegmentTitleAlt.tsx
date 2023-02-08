import React from "react"
import { Typography, Box, useTheme } from "@mui/material"

interface Props {
  children: React.ReactNode
  textShadowColor: string
}

const SegmentTitleAlt = ({
  children,
  textShadowColor,
  ...otherProps
}: Props) => {
  const theme = useTheme()
  return (
    <Box mb={2}>
      <Typography
        variant="h4"
        color="primary"
        {...otherProps}
        sx={{ textShadow: `${theme.palette.secondary.main} 2px 2px` }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default SegmentTitleAlt
