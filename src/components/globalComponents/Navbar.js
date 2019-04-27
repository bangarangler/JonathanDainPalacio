import React from "react"
import NavbarHeader from "./NavbarHeader/NavbarHeader.js"
import NavbarLinks from "./NavbarLinks/NavbarLinks.js"
import NavbarIcons from "./NavBarIcons/NavbarIcons.js"
import styles from "./Navbar.module.less"
import { GoChevronDown } from "react-icons/go"

class Navbar extends React.Component {
  state = {
    openNavbar: false,
  }
  handleNavbar = () => {
    this.setState({ openNavbar: !this.state.openNavbar })
  }
  render() {
    return (
      <>
        <GoChevronDown
          className={
            !this.state.openNavbar
              ? styles.toggleNav
              : [styles.toggleNav, styles.change].join(" ")
          }
          onClick={() => this.handleNavbar()}
        />
        <div
          className={
            !this.state.openNavbar
              ? styles.NavContainer
              : [styles.NavContainer, styles.show].join(" ")
          }
        >
          <NavbarHeader openNavbar={this.state.openNavbar} />
          <NavbarIcons openNavbar={this.state.openNavbar} />
          <NavbarLinks openNavbar={this.state.openNavbar} />
        </div>
      </>
    )
  }
}

export default Navbar
