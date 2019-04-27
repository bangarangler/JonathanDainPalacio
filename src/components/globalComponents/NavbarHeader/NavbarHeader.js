import React from "react"
import { Link } from "gatsby"
import styles from "./NavbarHeader.module.less"
import logo from "../../../images/beforeDawnTempLogo.svg"

class NavbarHeader extends React.Component {
  render() {
    return (
      <div className={styles.NavHeadContainer}>
        <Link to="/">
          <img src={logo} alt="Jonathan Dain Palacio" className={styles.Logo} />
        </Link>
      </div>
    )
  }
}

export default NavbarHeader
