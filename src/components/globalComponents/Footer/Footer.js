import React from "react"
import styles from "./Footer.module.less"
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaSlack,
} from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

const Footer = props => {
  const jpSocialInfo = [
    {
      id: 1,
      icon: <FaInstagram className={styles.instagram} />,
      path: "https://www.instagram.com/bangarangler/?hl=en",
      text: "instagram",
    },
    {
      id: 2,
      icon: <FaTwitter className={styles.twitter} />,
      path: "https://twitter.com/bangarangler",
      text: "twitter",
    },
    {
      id: 3,
      icon: <FaFacebook className={styles.facebook} />,
      path: "https://www.facebook.com/jonathan.palacio.9461?ref=bookmarks",
      text: "facebook",
    },
    {
      id: 4,
      icon: <FaLinkedinIn className={styles.linkedin} />,
      path: "https://www.linkedin.com/in/jonathan-palacio-401945a3/",
      text: "linkedIn",
    },
    {
      id: 5,
      icon: <GoMarkGithub className={styles.github} />,
      path: "https://github.com/bangarangler",
      text: "github",
    },
    {
      id: 6,
      icon: <FaSlack className={styles.slack} />,
      path:
        "https://join.slack.com/t/bangarangler/shared_invite/enQtNjA4OTc5NTQwMTk1LTNjOTRlYjIwOTkyYzBhYTNmYjBjOWY5MTFjNGRkNmUyZWQ3MThiMDI1ZWQ3NjM2Mzg2NDNmZjllMGI3ZmE5NmE",
      text: "slack",
    },
  ]
  const [links] = React.useState(jpSocialInfo)
  return (
    <footer className={styles.Footer}>
      <h3 className={styles.heading}>Jonathan Dain Palacio</h3>
      <div className={styles.gridLink}>
        {links.map(link => {
          //{
          //const name = link.text
          //console.log(name)
          //}
          return (
            <a
              //className={styles.name}
              href={link.path}
              key={link.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          )
        })}
      </div>
      <p className={styles.copy}>&copy; 2018 Jonathan Dain Palacio</p>
    </footer>
  )
}

export default Footer
