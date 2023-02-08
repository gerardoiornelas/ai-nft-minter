import { styled } from "@mui/system"
import { rem } from "polished"
import { Box, AppBar } from "@mui/material"
import { Scrollchor } from "react-scrollchor"

const StyledSocialNav = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}))

const StyledAppBar = styled(AppBar)(({ appBarWhite, theme }) => ({
  backgroundColor: appBarWhite ? "white" : "initial",
  transition: "all 500ms",
  [theme.breakpoints.down("xs")]: {
    backgroundColor: "white",
  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
  },
}))
const StyledUIShell = styled(Box)({
  padding: `${rem(1)}`,
})

const StyledNavElement = styled(Scrollchor)(({ isactivelink, theme }) => ({
  backgroundColor: "transparent",
  border: 0,
  fontSize: `${rem(16)}`,
  color: theme.palette.primary.main,
  padding: `${rem(10)} ${rem(22)}`,
  textDecoration: "none",
  transition: "all 500ms",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&:after": {
    content: "''",
    height: "4px",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    transition: "all 200ms",
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
    "&:after": {
      clipPath: "polygon(10% 0, 90% 0, 90% 100%, 10% 100%)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    color: "#fff",
  },
}))

const StyledScheduleCall = styled(Scrollchor)(({ theme }) => ({
  color: "white",
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.main,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  margin: 0,
  cursor: "pointer",
  textDecoration: "none",
  lineHeight: "1.75",
  textTransform: "uppercase",
  padding: "8px 22px",
  transition:
    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
}))

export {
  StyledSocialNav,
  StyledAppBar,
  StyledUIShell,
  StyledNavElement,
  StyledScheduleCall,
}
