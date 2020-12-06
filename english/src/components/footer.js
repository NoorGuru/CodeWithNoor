import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              author
              twitter
          }
      }
  }
  `)
  return (
    <footer>
      © {new Date().getFullYear()}, Created by{" "}
      <a href={data.site.siteMetadata?.twitter} target="_blank" rel="noreferrer">
      {data.site.siteMetadata?.author}
      </a>
    </footer>
  )
}

export default Footer
