import React from 'react';

const BlogPost = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { slug } = pathContext;
  const { frontmatter } = post;

  return (
    <div>
      <div style={{
             maxWidth: '900px', 
             margin: '4.5rem auto 4.5rem auto'
           }}
      >
        <div style={{
               position: 'relative', 
               textAlign: 'center', 
               margin: 'auto 16px auto 16px'
             }}
        >
          <h1>{post.frontmatter.title}</h1>
          <p style={{
               margin: '0', 
               fontSize: '0.8em', 
               color: 'gray'
             }}
           >
            {post.timeToRead} min read &middot;
          </p>
          <div
            style={{textAlign: 'left'}}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </div>
  );
};

export const blogPostQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
