module.exports = {
  siteMetadata: {
    title: 'My Blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
       name: "markdown",
       path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ]
      }
    },
    'gatsby-plugin-react-helmet'],
};
