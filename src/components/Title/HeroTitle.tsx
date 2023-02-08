import React from "react"
import { Typography } from "@mui/material"

interface Props {
  children: React.ReactNode
}

const HeroTitle = ({ children, ...props }: Props) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: "4rem",
          md: "5rem",
        },
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default HeroTitle
