import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { Link } from "gatsby"
import { PageHeader } from "../components/Header/Header.js"
import Img from "gatsby-image"
import Banner from "../components/Banner/Banner.js"
import blogImg from "../images/bgHero/beachHero.jpg"
import moment from "moment"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulBlog.edges

    return (
      <Layout>
        <SEO
          title="Blog"
          keywords={[`developer`, `portfolio`, `blog`, `web developer`]}
        />
        <PageHeader img={blogImg}>
          <Banner title="web development" subtitle="whats new with coding?" />
        </PageHeader>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <div>
                <Img fluid={node.image.fluid} />
              </div>
              <h3>
                <Link to={node.slug}>{title}</Link>
              </h3>
              <p>{node.subTitle}</p>
              <small>{moment(node.postedOn).calendar()}</small>
              <p>{node.author}</p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog {
      edges {
        node {
          title
          subTitle
          author
          postedOn
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          slug
        }
      }
    }
  }
`
