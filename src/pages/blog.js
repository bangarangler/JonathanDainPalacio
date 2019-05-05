import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { Link } from "gatsby"
import { PageHeader } from "../components/Header/Header.js"
import Img from "gatsby-image"
import Banner from "../components/Banner/Banner.js"
import blogImg from "../images/bgHero/beachHero.jpg"
import { Section } from "../components/Section/Section.js"
import { SectionTitle } from "../components/Section/SectionTitle.js"
import moment from "moment"
import styles from "./Blog.module.less"
import { graphql } from "gatsby"

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
        <Section>
          <SectionTitle title="jon" message="ponderings and expertise from" />
        </Section>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug} className={styles.PreviewContainer}>
              <div className={styles.ImagePreviewContainer}>
                <Img fluid={node.image.fluid} />
              </div>
              <div className={styles.HeadingLinkContainer}>
                <h3>
                  <Link to={node.slug}>{title}</Link>
                </h3>
              </div>
              <div className={styles.ContentPreviewContainer}>
                <p className={styles.subtitle}>{node.subTitle}</p>
                <small className={styles.postedOn}>
                  {moment(node.postedOn).calendar()}
                </small>
                <p className={styles.author}>{node.author}</p>
              </div>
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slug
        }
      }
    }
  }
`
