import { useState } from "react"
import Layout from "../features/layout/Layout"
import Seo from "../components/seo"
import Header from "../features/hero/Header"
import About from "../features/about/About"
import Projects from "../features/projects/Projects"
import Skills from "../features/skills/Skills"
import Contact from "../features/contact/Contact"
import Navbar from "../features/layout/Navbar"
import MenuButton from "../components/MenuButton"
import NavMenu from "../features/layout/NavMenu"
import NavLinks from "../features/layout/NavLinks"
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
