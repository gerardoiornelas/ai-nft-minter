require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Giominter`,
    description: `Gatsby, Hardhat, and MUI template`,
    author: `@gerardoiornelas`,
    siteUrl: `https://www.gerardoiornelas.com/`,
    metaDescription: `Digital architect of user-interfaces with a passion for Blockchain and Web3.`,
    metaKeywords: `react, hardhat, solidity, web3, UX, UI, blockchain`,
    googleFonts: `https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-react-helmet`,
    // If you want to use styled components you should add the plugin here.
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-mui-emotion`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lostwun-portfolio`,
        short_name: `lostwun`,
        start_url: `/`,
        background_color: `#03002d`,
        display: `minimal-ui`,
        icon: `src/images/lostwun-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
