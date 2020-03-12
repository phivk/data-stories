/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>

      <div sx={{
        color: 'text', 
        backgroundColor: 'background', 
        padding: 2, 
        fontSize: 0
      }}>Theme UI sample</div>
      <div sx={{
        color: 'background', 
        backgroundColor: 'primary', 
        padding: 2, 
        fontSize: 1
      }}>Theme UI sample</div>
      <div sx={{
        color: 'primary', 
        backgroundColor: 'background', 
        padding: 2, 
        fontSize: 2
      }}>Theme UI sample</div>
      <div sx={{
        color: 'secondary', 
        backgroundColor: 'background', 
        padding: 2, 
        fontSize: 3
      }}>Theme UI sample</div>
      <div sx={{
        color: 'accent', 
        backgroundColor: 'background', 
        padding: 2, 
        fontSize: 3
      }}>Theme UI sample</div>
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
