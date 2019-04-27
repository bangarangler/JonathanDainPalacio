import React from "react"

import { PageHeader } from "../components/Header/Header.js"
import Banner from "../components/Banner/Banner.js"
import contactImage from "../images/bgHero/tattooOffice.jpg"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const ContactPage = () => {
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
    </Layout>
  )
}

export default ContactPage
