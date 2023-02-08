import React from "react"
import { Typography } from "@mui/material"

interface Props {
  children: React.ReactNode
}
const SectionTitle = ({ children, ...props }: Props) => {
  return (
    <Typography variant="h5" sx={{ mb: 1 }} {...props}>
      {children}
    </Typography>
  )
}

export default SectionTitle
