import React from "react"
import { Box, Grid } from "@mui/material"

interface Props {
  children: React.ReactNode
  mb: number
}

const RowCol = ({ children, mb = 0, ...otherProps }: Props) => {
  return (
    <>
      <Grid container {...otherProps}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <Box mb={mb} />
    </>
  )
}

export default RowCol
