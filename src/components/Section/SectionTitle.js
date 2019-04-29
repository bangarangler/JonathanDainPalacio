import React from "react"
import styles from "./SectionTitle.module.less"

export const SectionTitle = ({ title, message }) => {
  return (
    <div className={styles.TitleWrapper}>
      <h3 className={styles.message}>{message}</h3>
      <div className={styles.underline} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

SectionTitle.defaultProps = {
  message: "insert message",
  title: "insert title",
}
