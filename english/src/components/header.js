import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"

import style from '../styles/header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div>
      <h1>
        <Link className={style.title} to="/" >
          {siteTitle}
        </Link>
      </h1>

      <NavBar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
