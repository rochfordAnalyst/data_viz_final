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
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          // Defaults used for gatsbyImageData and StaticImage
          defaults: {},
          // Set to false to allow builds to continue on image errors
          failOnError: true,
          // deprecated options and their defaults:
          base64Width: 20,
          forceBase64Format: `png`, // valid formats: png,jpg,webp
          useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
          stripMetadata: true,
          defaultQuality: 50,
        },
      },
  ],
}
