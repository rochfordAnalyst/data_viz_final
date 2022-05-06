module.exports = {
  siteMetadata: {
    title: `Fordham-Recursion-ESG-Big-Mortgage-Data-Research`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `data_viz_final/src/data/`,
        },
      },
  ],
}
