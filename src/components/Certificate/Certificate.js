import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./Certificate.module.less"

const Certificate = props => {
  const [showCert, setShowCert] = useState(false)
  const toggleCerts = () => {
    setShowCert(!showCert)
  }
  return (
    <StaticQuery
      query={QUERY}
      render={data => {
        return (
          <>
            <h3 className={styles.certsHeading} onClick={toggleCerts}>
              Certificates
            </h3>
            <div className={styles.certContainer}>
              {data.certs.edges.map((cert, index) => {
                //console.log(node)
                //console.log(node.childImageSharp.fluid)
                return (
                  <div key={index}>
                    {showCert && (
                      <Img
                        fluid={cert.node.childImageSharp.fluid}
                        className={styles.cImage}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </>
        )
      }}
    />
  )
}

const QUERY = graphql`
  query {
    certs: allFile(filter: { relativeDirectory: { eq: "UdemyCerts" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Certificate
