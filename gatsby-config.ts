import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
     `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: 'https://mamlaja.be/graphql',
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
