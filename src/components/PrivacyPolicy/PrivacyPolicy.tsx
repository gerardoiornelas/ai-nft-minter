import React from "react"
import PropTypes from "prop-types"
import { Container, Typography, Box } from "@mui/material"

import { UIShell } from "../UIShell"

const PrivacyPolicy = () => {
  return (
    <UIShell variant="alt">
      <Container>
        <Typography variant="h5">Privacy Policy</Typography>
        <Typography>
          Gerardo I. Ornelas ("we," "us," or "our") respects the privacy of our
          users ("user," "you," or "your") and has created this privacy policy
          ("Policy") to explain how we collect, use, and share information about
          you when you use our websites, mobile applications, and other online
          products and services (collectively, the "Services").
        </Typography>
        <Box my={2}>
          <Typography variant="h6">Information We Collect</Typography>
          <Typography>
            We may collect information about you in a variety of ways,
            including:
          </Typography>
          <Box my={2} component="ul">
            <Box my={2} component="li">
              <Typography>
                Information you provide directly to us: We may collect
                information about you when you fill out a form, create an
                account, or otherwise interact with our Services. This may
                include your name, email address, phone number, and other
                contact information.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Information we collect automatically: When you use our Services,
                we may collect information about your device, such as your IP
                address, device type, and browser type. We may also collect
                information about your usage of our Services, such as the pages
                you visit and the actions you take.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Information from third parties: We may receive information about
                you from third parties, such as social media platforms or other
                websites.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="h6">How We Use Your Information</Typography>
          <Typography>
            We may use the information we collect about you for a variety of
            purposes, including:
          </Typography>
          <Box my={2} component="ul">
            <Box my={2} component="li">
              <Typography>
                Providing and improving our Services: We may use your
                information to provide and improve the Services, including to
                personalize your experience, respond to your requests, and
                maintain and secure the Services.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Communications: We may use your information to communicate with
                you, such as to send you updates or newsletters, or to respond
                to your inquiries.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Research and development: We may use your information to conduct
                research and development, including to improve and enhance our
                Services.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Marketing: We may use your information to send you marketing
                communications, such as promotions or special offers. You may
                opt out of receiving these communications at any time.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Sharing Your Information</Typography>
          <Typography>
            We may share your information with third parties in the following
            circumstances:
          </Typography>
          <Box my={2} component="ul">
            <Box my={2} component="li">
              <Typography>
                With your consent: We may share your information with third
                parties when you have given us your consent to do so.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                With service providers: We may share your information with
                service providers who assist us in operating and improving the
                Services, such as hosting companies, payment processors, and
                marketing agencies.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                As required by law: We may disclose your information as required
                by law, such as to comply with a subpoena or similar legal
                process.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                In the event of a sale or merger: If we sell or merge with
                another company, we may share your information with the other
                company as part of the transaction.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Your Choices and Rights</Typography>
          <Typography>
            You have certain choices and rights regarding the collection, use,
            and sharing of your information. These include the following:
          </Typography>
          <Box my={2} component="ul">
            <Box my={2} component="li">
              <Typography>
                Opting out of marketing communications: You may opt out of
                receiving marketing communications from us at any time by
                following the instructions in the communication or by contacting
                us.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Accessing and correcting your information: You may access and
                correct your personal information by logging into your account
                or contacting us.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Requesting deletion of your information: You may request that we
                delete your personal information by contacting us. Please note
                that we may be required to retain certain information for legal
                or other reasons.
              </Typography>
            </Box>
            <Box my={2} component="li">
              <Typography>
                Exercise your rights under applicable law: Depending on your
                location, you may have certain rights under applicable law, such
                as the right to object to the processing of your information or
                the right to data portability.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Data Retention</Typography>
          <Typography>
            We will retain your information for as long as necessary to provide
            the Services and fulfill the purposes outlined in this Privacy
            Policy.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Changes to this Privacy Policy</Typography>
          <Typography>
            We may update this Privacy Policy from time to time. We will post
            any changes on this page and encourage you to review the Privacy
            Policy periodically.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography>
            If you have any questions or concerns about this Privacy Policy, you
            may contact us at info@ornelastechnologies.com.
          </Typography>
        </Box>
      </Container>
    </UIShell>
  )
}

PrivacyPolicy.propTypes = {
  children: PropTypes.node,
}

export default PrivacyPolicy
