import { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../sections/Main"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"
import Navbar from "../components/Navbar"
import MenuButton from "../components/MenuButton"
import NavMenu from "../components/NavMenu"

const IndexPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Navbar />
        <MenuButton
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(v => !v)}
        />
        <Main />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </Layout>
      <NavMenu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </>
  )
}

export default IndexPage
