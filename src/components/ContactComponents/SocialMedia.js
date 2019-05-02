import React from "react"
import styles from "./SocialMedia.module.less"
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaSlack,
} from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

const SocialMedia = props => {
  const jpSocialInfo = [
    {
      id: 1,
      icon: (
        <FaInstagram className={[styles.icon, styles.instagram].join(" ")} />
      ),
      path: "https://www.instagram.com/bangarangler/?hl=en",
      text: "instagram",
    },
    {
      id: 2,
      icon: <FaTwitter className={[styles.icon, styles.twitter].join(" ")} />,
      path: "https://twitter.com/bangarangler",
      text: "twitter",
    },
    {
      id: 3,
      icon: <FaFacebook className={[styles.icon, styles.facebook].join(" ")} />,
      path: "https://www.facebook.com/jonathan.palacio.9461?ref=bookmarks",
      text: "facebook",
    },
    {
      id: 4,
      icon: (
        <FaLinkedinIn className={[styles.icon, styles.linkedin].join(" ")} />
      ),
      path: "https://www.linkedin.com/in/jonathan-palacio-401945a3/",
      text: "linkedIn",
    },
    {
      id: 5,
      icon: <GoMarkGithub className={[styles.icon, styles.github].join(" ")} />,
      path: "https://github.com/bangarangler",
      text: "github",
    },
    {
      id: 6,
      icon: <FaSlack className={[styles.icon, styles.slack].join(" ")} />,
      path:
        "https://join.slack.com/t/bangarangler/shared_invite/enQtNjA4OTc5NTQwMTk1LTNjOTRlYjIwOTkyYzBhYTNmYjBjOWY5MTFjNGRkNmUyZWQ3MThiMDI1ZWQ3NjM2Mzg2NDNmZjllMGI3ZmE5NmE",
      text: "slack",
    },
  ]
  const [links, setLinks] = React.useState(jpSocialInfo)
  setLinks(...links)
  return (
    <aside className={styles.gridContainer}>
      {links.map(link => {
        return (
          <div className={styles.SocialContainer} key={link.id}>
            <a href={link.path} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
            <p className={styles.linkText}>{link.text}</p>
          </div>
        )
      })}
    </aside>
  )
}

export default SocialMedia
