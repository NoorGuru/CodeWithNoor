/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.css';

import Header from "./header"
import Footer from "./footer"

import style from "../styles/layout.module.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={style.container}>
      <div className={style.content}>
        <Header siteTitle={data.site.siteMetadata?.title || `Code With Noor`} />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
