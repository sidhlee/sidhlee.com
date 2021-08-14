import { useState } from "react"
import Layout from "../features/layout/Layout"

import Header from "../features/hero/Header"
import About from "../features/about/About"
import Projects from "../features/projects/Projects"
import Skills from "../features/skills/Skills"
import Contact from "../features/contact/Contact"

import CheckScrolled from "../components/CheckScrolled"

const IndexPage: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("/")

  return (
    <>
      <Layout currentPath={currentPath}>
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
      </Layout>
    </>
  )
}

export default IndexPage
