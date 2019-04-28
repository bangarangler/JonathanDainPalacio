import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlog
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.subtitle} />
        <Img fluid={post.image.fluid} />
        <h1>{post.title}</h1>
        <p>{post.subTitle}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.post.childContentfulRichText.html,
          }}
        />
        <hr />
        <ul>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                - {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} +
              </Link>
            )}
          </li>
          <li>
            <Link to="/blog">back to blogs</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const PageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      title
      subTitle
      author
      postedOn
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      post {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
