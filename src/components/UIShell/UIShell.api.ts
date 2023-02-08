import cuid from "cuid"

const navElements = [
  {
    id: cuid(),
    route: "/projects",
    title: "Projects",
    anchor: "#projects",
    isActiveLink: false,
  },
  {
    id: cuid(),
    route: "/blog",
    title: "Blog",
    anchor: "#blog",
    isActiveLink: false,
    subNav: false,
  },
  {
    id: cuid(),
    route: "/contact",
    title: "Contact",
    anchor: "#contact",
    isActiveLink: false,
    subNav: false,
  },
]

export { navElements }
