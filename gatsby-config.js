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
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'],
};
