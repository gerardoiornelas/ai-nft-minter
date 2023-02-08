import React from "react"
import { Box } from "@mui/material"
import PropTypes from "prop-types"

import UIShellHeader from "./UIShellHeader"
import UIShellFooter from "./UIShellFooter"
interface Props {
  children: React.ReactNode
}

const UIShell = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <UIShellHeader />
      <Box component="main" sx={{ display: "flex", flex: 1 }}>
        {children}
      </Box>
      <UIShellFooter />
    </Box>
  )
}

UIShell.propTypes = {
  children: PropTypes.node,
}

export default UIShell
