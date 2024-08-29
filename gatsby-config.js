/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/s7-promo",
  siteMetadata: {
    title: `Место по душе`,
    description: `Подкаст S7 Airlines и студии «Толк» — исследуем, чем живут люди и их города`,
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
