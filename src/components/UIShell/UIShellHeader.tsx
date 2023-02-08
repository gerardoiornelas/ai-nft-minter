import React from "react"
import { useSelector } from "react-redux"
import { useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useTheme,
  useMediaQuery,
  ButtonBase,
  Typography,
} from "@mui/material"

import { Title } from "../Title"
import UIShellFooter from "./UIShellFooter"

const UIShellHeader = () => {
  const blockchainProvider = useSelector(state => state.blockchainProvider)
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `)

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: `1px solid #fafafa`,
      }}
    >
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          <Box
            sx={{
              flexGrow: {
                xs: 1,
                md: 3,
              },
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                md: "flex-start",
              },
            }}
          >
            <ButtonBase onClick={() => navigate("/")}>
              <Title
                variant="segmentAlt"
                sx={{ color: theme.palette.primary.main }}
              >
                {data.site.siteMetadata.title}
              </Title>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Box>
              <Typography
                align={`right`}
              >{`Account: ${blockchainProvider.account}`}</Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

UIShellHeader.propTypes = {
  children: PropTypes.node,
}

export default UIShellHeader
