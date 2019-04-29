import React from "react"
import styles from "./SectionTitle.module.less"
import topHat from '../../images/fedora-hat.svg'

export const SectionTitle = ({ title, message }) => {
  return (
    <div className={styles.TitleWrapper}>
        <div className={styles.flexIt}>
      <h3 className={styles.message}>{message}</h3>
      <img src={topHat} alt='tophat'/>
    </div>
      <div className={styles.underline} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

SectionTitle.defaultProps = {
  message: "insert message",
  title: "insert title",
}
