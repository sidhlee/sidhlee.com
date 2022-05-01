/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useState } from "react"
import PropTypes from "prop-types"
import GlobalStyle, { COLORS } from "../../../global-style"
import Helmet from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "../lightmode/useTheme"
import Seo from "../../components/seo"
import Navbar from "./Navbar"
import MenuButton from "./MenuButton"
import NavMenu from "./NavMenu"
import NavLinks from "./NavLinks"

const StyledLayout = styled.div`
  // https://github.com/civiccc/react-waypoint/issues/275
  /* overflow-x: hidden; */
  /* scroll-snap-type: y proximity;
  height: 100vh;
  overflow-y: scroll;

  section {
    scroll-snap-align: start;
  } */
  position: relative;

  footer {
    padding: 0.5em;
    text-align: center;
    width: 100%;
    color: ${COLORS.offWhite};
    background-color: ${COLORS.darkGrey};
    span {
      margin: 0 0.25em;
    }
  }
`
type LayoutProps = {
  currentPath: string
  navbar?: "fixed" | "static"
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPath,
  navbar = "fixed",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <ThemeProvider>
          <Seo />
          <Navbar position={navbar}>
            <NavLinks currentPath={currentPath} />
          </Navbar>
          <MenuButton
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(v => !v)}
          />
          <NavMenu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
            <NavLinks currentPath={currentPath} />
          </NavMenu>
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
        </ThemeProvider>
      </StyledLayout>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
