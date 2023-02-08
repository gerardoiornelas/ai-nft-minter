import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import { theme } from "../../src/theme"
import {
  googleFonts,
  metaDescription,
  metaKeywords,
  appTitle,
} from "../../src/theme/theme.config"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <title>{`${appTitle}`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={googleFonts} rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/wme2bdf.css" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
