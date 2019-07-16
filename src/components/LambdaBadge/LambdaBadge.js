import React, { useEffect } from "react"
import styles from "./LambdaBadge.module.less"

const LambdaBadge = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//cdn.youracclaim.com/assets/utilities/embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <div className={styles.badgeContainer}>
      <div
        data-iframe-width="350"
        data-iframe-height="270"
        data-share-badge-id="94085533-4782-4025-9812-8300aa3b10d1"
      ></div>
      <script
        type="text/javascript"
        async
        src="//cdn.youracclaim.com/assets/utilities/embed.js"
      ></script>
    </div>
  )
}

export default LambdaBadge
