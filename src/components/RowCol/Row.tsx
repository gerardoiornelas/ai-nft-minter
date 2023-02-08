import React from "react"
import { Box, Grid } from "@mui/material"

interface Props {
  children: React.ReactNode
  mb: number
}

const Row = ({ children, mb, ...otherProps }: Props) => {
  return (
    <>
      <Grid container {...otherProps}>
        {children}
      </Grid>
      <Box mb={mb} />
    </>
  )
}

export default Row
