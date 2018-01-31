import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    {
     data.allMarkdownRemark.edges.map((post, index) => {
       return (
         <div style={{padding: '16px'}}>
           <Link to={"/"}> <h1> {post.node.frontmatter.title} </h1> </Link>
         </div>
       )
      })
    }
  </div>
)

export default IndexPage


export const BlogsQuery = graphql`
  query blogsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
