import React from "react"
import styles from "./Section.module.less"

export const Section = ({ children, text }) => {
  return <section className={styles.section}>{children}</section>
}
