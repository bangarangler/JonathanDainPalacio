import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import img from "../images/bgHero/blackAndWhiteCoding.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `coding`,
        `developer`,
        `react`,
        `software`,
        `portfolio`,
        `software developer`,
        "web developer",
        `fullstack developer`,
      ]}
    />
    <HomeHeader img={img}>
      <Banner title="Jonathan Dain Palacio" subtitle="fullstack developer" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
