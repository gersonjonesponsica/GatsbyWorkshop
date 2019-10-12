import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
  <header id="header">
    <div className="inner">
      <Link to="/" className="logo">introspect</Link>
      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
    </div>
  </header>
  <Link to="#menu" className="navPanelToggle"><span className="fa fa-bars" /></Link>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
