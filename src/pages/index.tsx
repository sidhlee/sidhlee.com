import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../sections/Main"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"
import Navbar from "../components/Navbar"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <Navbar />
    <Main />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
