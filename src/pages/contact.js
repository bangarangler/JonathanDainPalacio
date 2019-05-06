import React from "react"

import { PageHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import contactImage from "../images/bgHero/tattooOffice.jpg"
import { Section } from "../components/Section/Section.js"
import { SectionTitle } from "../components/Section/SectionTitle.js"
import ContactQuickInfo from "../components/ContactComponents/ContactQuickInfo.js"
import SocialMedia from "../components/ContactComponents/SocialMedia.js"
//import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[
          `web developer`,
          `coding`,
          `developer`,
          `software developer`,
        ]}
      />
      <PageHeader img={contactImage}>
        <Banner title="Jon Palacio" subtitle="feel free to reach out!" />
      </PageHeader>
      <Section>
        <SectionTitle title="find me &#64;" message="searching for jon?" />
      </Section>
      <ContactQuickInfo />
      <SocialMedia />
    </Layout>
  )
}

export default ContactPage
