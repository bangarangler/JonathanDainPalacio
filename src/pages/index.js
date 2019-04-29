import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import img from "../images/bgHero/blackAndWhiteCoding.jpg"
import { Section } from "../components/Section/Section.js"
import { SectionTitle } from "../components/Section/SectionTitle.js"

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
    <Section>
      <SectionTitle title="grow" message="embrace failing in order to" />
    </Section>
  </Layout>
)

export default IndexPage
