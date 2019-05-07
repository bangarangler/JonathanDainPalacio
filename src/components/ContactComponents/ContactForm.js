import React from "react"
import styles from "./ContactForm.module.less"
//import email from "../../images/email.svg"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const QUERY = graphql`
  {
    image: file(relativePath: { eq: "email.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ContactForm = props => {
  return (
    <StaticQuery
      query={QUERY}
      render={data => {
        return (
          <div className={styles.wrapper}>
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="email SVG"
              className={styles.img}
            />
            <form
              action="#"
              method="post"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name..."
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address..."
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Your Message!"
                />
              </div>
              <ul>
                <li>
                  <input type="submit" value="Send Message" />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </div>
        )
      }}
    />
  )
}

export default ContactForm
