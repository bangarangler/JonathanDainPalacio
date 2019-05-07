import React from "react"
import styles from "./Resume.module.less"
//import { StaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import img from "../../images/resume.png"

//const QUERY = graphql`
//{
//image: file(relativePath: { eq: "resume.jpg" }) {
//childImageSharp {
//fluid {
//...GatsbyImageSharpFluid_tracedSVG
//}
//}
//}
//}
//`
const Resume = props => {
  const [resume, setResume] = React.useState(false)
  function showResume() {
    setResume(!resume)
  }
  return (
    <section className={styles.resumeWrapper}>
      <h3 className={styles.resumeHeading} onClick={() => showResume()}>
        Jonathan's Resume
      </h3>
      {resume && (
        <img className={styles.resumeImg} src={img} alt="Jons Resume" />
      )}
    </section>
  )
}

export default Resume
