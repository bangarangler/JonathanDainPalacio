import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { PageHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import blogImg from "../images/bgHero/beachHero.jpg"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      keywords={[`developer`, `portfolio`, `blog`, `web developer`]}
    />
    <PageHeader img={blogImg}>
      <Banner title="web development" subtitle="whats new with coding?" />
    </PageHeader>
  </Layout>
)

export default BlogPage
