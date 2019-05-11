import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import img from "../images/bgHero/blackAndWhiteCoding.jpg"
import { Section } from "../components/Section/Section.js"
import { SectionTitle } from "../components/Section/SectionTitle.js"
import ProjectComponent from "../components/ProjectComponent/ProjectComponent.js"
import Resume from "../components/Resume/Resume.js"
import Certificate from "../components/Certificate/Certificate"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
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
    <ProjectComponent projects={data.projects} />
    <Resume />
    <Certificate />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    projects: allContentfulProjects(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          projectName
          position
          teamMembers
          description
          coverImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          childContentfulProjectsProjectDetailsRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
