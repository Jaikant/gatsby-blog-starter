import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = (props) => {
 const { data } = props;
  return (
    <div style={{
           display: 'flex', 
           flexWrap: 'wrap', 
           justifyContent: 'center'
         }}
    >
      {
        data.allMarkdownRemark.edges.map((post, index) => {
          const { node } = post
          return (
            <div style={{
                   padding: '16px', 
                   margin: '16px', 
                   width: '234px', 
                   borderStyle: 'solid', 
                   borderWidth: 'thin'
                 }}
            >
              <Link to={node.fields.slug}> 
                {node.frontmatter.image ? <Img resolutions={node.frontmatter.image.childImageSharp.resolutions} /> : null }
              </Link>
              <h4> {node.frontmatter.title} </h4> 
              <div style={{fontSize: '0.65em'}}>{node.timeToRead} min read  </div>
              <div>{node.excerpt}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default IndexPage


export const BlogsQuery = graphql`
  query blogsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                resolutions(width: 200, height: 200, cropFocus: ENTROPY) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`
