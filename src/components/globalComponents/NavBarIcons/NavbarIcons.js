import React from "react"
import styles from "./NavbarIcons.module.less"
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaSlack,
} from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

class NavbarIcons extends React.Component {
  state = {
    icons: [
      {
        id: 1,
        icon: (
          <FaInstagram className={[styles.icon, styles.instagram].join(" ")} />
        ),
        path: "https://www.instagram.com/bangarangler/?hl=en",
      },
      {
        id: 2,
        icon: <FaTwitter className={[styles.icon, styles.twitter].join(" ")} />,
        path: "https://twitter.com/bangarangler",
      },
      {
        id: 3,
        icon: (
          <FaFacebook className={[styles.icon, styles.facebook].join(" ")} />
        ),
        path: "https://www.facebook.com/jonathan.palacio.9461?ref=bookmarks",
      },
      {
        id: 4,
        icon: (
          <FaLinkedinIn className={[styles.icon, styles.linkedin].join(" ")} />
        ),
        path: "https://www.linkedin.com/in/jonathan-palacio-401945a3/",
      },
      {
        id: 5,
        icon: (
          <GoMarkGithub className={[styles.icon, styles.github].join(" ")} />
        ),
        path: "https://github.com/bangarangler",
      },
      {
        id: 6,
        icon: <FaSlack className={[styles.icon, styles.slack].join(" ")} />,
        path:
          "https://join.slack.com/t/bangarangler/shared_invite/enQtNjA4OTc5NTQwMTk1LTNjOTRlYjIwOTkyYzBhYTNmYjBjOWY5MTFjNGRkNmUyZWQ3MThiMDI1ZWQ3NjM2Mzg2NDNmZjllMGI3ZmE5NmE",
      },
    ],
  }
  render() {
    return (
      <div className={styles.IconContainer}>
        {this.state.icons.map(icon => {
          return (
            <a
              href={icon.path}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
    )
  }
}

export default NavbarIcons
