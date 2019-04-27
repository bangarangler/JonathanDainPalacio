import React from "react"
import styles from "./NavbarLinks.module.less"
import { Link } from "gatsby"

class NavbarLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          id: 0,
          path: "/",
          name: "home",
        },
        {
          id: 1,
          path: "/blog",
          name: "blog",
        },
        {
          id: 2,
          path: "/contact",
          name: "contact",
        },
      ],
    }
  }
  render() {
    return (
      <ul className={styles.LinkContainer}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className={styles.navLink}>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavbarLinks
