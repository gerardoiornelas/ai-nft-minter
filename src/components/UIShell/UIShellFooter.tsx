import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material"

const UIShellFooter = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box>
      <Divider />
      <Container>
        <Grid container py={4}>
          <Grid item xs={12} md={6}>
            <Typography align={isSmall ? "center" : "left"}>
              © Gerardo I. Ornelas
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent={isSmall ? `center` : `flex-end`}
            >
              <Box>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

UIShellFooter.propTypes = {
  children: PropTypes.node,
}

export default UIShellFooter
