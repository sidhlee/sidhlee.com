import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../sections/Main"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
