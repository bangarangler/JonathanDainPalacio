import React from "react"
import styles from "./Project.module.less"
import Img from "gatsby-image"

const Project = node => {
  //console.log(node.project.node.id)
  const [show, setShow] = React.useState(false)
  function showProject() {
    setShow(!show)
  }
  return (
    <div key={node.project.node.id} className={styles.previewGrid}>
      <h3 className={styles.projectName}>{node.project.node.projectName}</h3>
      <Img
        fluid={node.project.node.coverImage.fluid}
        className={styles.coverImage}
      />
      <p className={styles.description}>{node.project.node.description}</p>
      <button className={styles.previewBtn} onClick={() => showProject()}>
        show more
      </button>
      {show && (
        <section className={styles.contentContainer}>
          <p className={styles.position}>
            role for project: {node.project.node.position}
          </p>
          <p className={styles.teamMembers}>
            we had {node.project.node.teamMembers} team members
          </p>
        </section>
      )}
      {show && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html:
              node.project.node
                .childContentfulProjectsProjectDetailsRichTextNode
                .childContentfulRichText.html,
          }}
        />
      )}
    </div>
  )
}

export default Project
