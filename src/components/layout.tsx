/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../../global-style"
import Helmet from "react-helmet"
import styled from "styled-components"

const StyledLayout = styled.div`
  overflow-x: hidden;
  /* scroll-snap-type: y proximity;
  height: 100vh;
  overflow-y: scroll;

  section {
    scroll-snap-align: start;
  } */
  position: relative;

  footer {
    padding-bottom: 1em;
    text-align: center;
    width: 100%;
    background-color: var(--cl-main);
    span {
      margin: 0 0.25em;
    }
  }
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,800&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <StyledLayout>
        {children}
        <footer>
          © {new Date().getFullYear()},{" "}
          <span className="nowrap">Designed &amp; Developed</span>{" "}
          <span className="nowrap">by Sid Hayoun Lee</span>{" "}
          <span className="nowrap">
            with{" "}
            <span role="img" aria-label="coffee">
              ☕
            </span>{" "}
            and{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>
          </span>
        </footer>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
