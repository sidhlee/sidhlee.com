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
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Designed &amp; Developed by Sid Hayoun
          Lee with{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          and{" "}
          <span role="img" aria-label="love">
            ❤️
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
