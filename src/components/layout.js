import React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/globalComponents/Navbar.js"
import Footer from "../components/globalComponents/Footer/Footer.js"
//import "./layout.css"
import "../less/index.less"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
