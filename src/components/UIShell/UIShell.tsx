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
    <>
      <UIShellHeader />
      <Box component="main">{children}</Box>
      <UIShellFooter />
    </>
  )
}

UIShell.propTypes = {
  children: PropTypes.node,
}

export default UIShell
