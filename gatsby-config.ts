import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `samroy.io`,
    siteUrl: `https://www.samroy.io`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
    }
  }, "gatsby-plugin-emotion", "gatsby-plugin-mdx", "gatsby-plugin-image", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;