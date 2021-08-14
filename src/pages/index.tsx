import { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../sections/Header"
import About from "../sections/About"
import Projects from "../features/projects/Projects"
import Skills from "../sections/Skills"
import Contact from "../features/contact/Contact"
import Navbar from "../components/Navbar"
import MenuButton from "../components/MenuButton"
import NavMenu from "../components/NavMenu"
import NavLinks from "../components/NavLinks"
import CheckScrolled from "../components/CheckScrolled"

const IndexPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")

  return (
    <>
      <Layout>
        <Seo />
        <Navbar>
          <NavLinks currentPath={currentPath} />
        </Navbar>
        <MenuButton
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(v => !v)}
        />
        <CheckScrolled onEnter={() => setCurrentPath("/")}>
          <Header />
        </CheckScrolled>
        <main>
          <CheckScrolled onEnter={() => setCurrentPath("/#about")}>
            <About />
          </CheckScrolled>
          <CheckScrolled onEnter={() => setCurrentPath("/#projects")}>
            <Projects />
          </CheckScrolled>
          <CheckScrolled onEnter={() => setCurrentPath("/#skills")}>
            <Skills />
          </CheckScrolled>
          <CheckScrolled onEnter={() => setCurrentPath("/#contact")}>
            <Contact />
          </CheckScrolled>
        </main>
        <NavMenu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)}>
          <NavLinks currentPath={currentPath} />
        </NavMenu>
      </Layout>
    </>
  )
}

export default IndexPage
