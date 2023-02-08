import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { Box, Container, Button, Typography } from "@mui/material"

import { Title } from "../Title"
import { UIShell } from "../UIShell"

import ImgThanks from "../../images/thanks.jpg"

const Thanks = () => {
  return (
    <UIShell variant="alt">
      <Container>
        <Box mb={4} display="flex" justifyContent={`center`}>
          <Box component="img" src={ImgThanks} alt="robot saying thank you" />
        </Box>
        <Box mb={4}>
          <Title variant="segmentAlt" align="center">
            Thank you!
          </Title>
          <Typography align="center">
            Your message is in flight! I'll contact you within the next 24 hours
            to follow up on your inquiry!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="secondary"
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </UIShell>
  )
}

Thanks.propTypes = {
  children: PropTypes.node,
}

export default Thanks
