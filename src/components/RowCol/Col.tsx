import React from "react"
import { Grid } from "@mui/material"

interface Props {
  children: React.ReactNode
  xs: number
}

const Col = ({ children, xs = 12, ...otherProps }: Props) => {
  return (
    <Grid item {...otherProps} xs={xs}>
      {children}
    </Grid>
  )
}

export default Col
