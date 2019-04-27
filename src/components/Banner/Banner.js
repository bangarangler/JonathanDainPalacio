import React from "react"

import styles from "./Banner.module.less"

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className={styles.BannerContainer}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      {children}
    </div>
  )
}

export default Banner

Banner.defaultProps = {
  title: "Jon Palacio",
  subtitle: "web developer",
}
