import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./blogPostContentful.module.less"

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
        <div className={styles.PostWrapper}>
          <div className={styles.PostImageContainer}>
            <Img fluid={post.image.fluid} className={styles.PostImage} />
          </div>
          <div className={styles.PostHeadings}>
            <h1 className={styles.Heading}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subTitle}</p>
          </div>
          <div className={styles.dangerous}>
            <div
              dangerouslySetInnerHTML={{
                __html: post.post.childContentfulRichText.html,
              }}
            />
          </div>
          <div className={styles.ULPost}>
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
          </div>
        </div>
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
