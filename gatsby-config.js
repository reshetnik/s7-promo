/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/s7-promo",
  siteMetadata: {
    title: `s7-promo`,
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }],
}
