const parseFilepath = require('parse-filepath');
const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath != null) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = parseFilepath(fileNode.relativePath);
    if (parsedFilePath !== 'undefined') {
      const slug = `/${parsedFilePath.dir}/`;
      createNodeField({ node, name: 'slug', value: slug });
    }
  }
};

const createBlogPages = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const blogPostTemplate = path.resolve(
      'src/templates/blog-post-template.js'
    );
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  timeToRead
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
       ).then(result => {
          const posts = result.data.allMarkdownRemark.edges;

          posts.forEach((post, index) => {
            createPage({
              path: `${post.node.fields.slug}`,
              component: blogPostTemplate,
              context: {
                slug: `${post.node.fields.slug}`,
              }
            });
          })
        })
      );
    });
  }

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  createBlogPages(createPage, graphql);
};
