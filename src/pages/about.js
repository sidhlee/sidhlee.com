import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>About</h1>
    <p>
      I decided to become a developer because that was my first dream before I
      got into music. Now that I know what it feels like to share my music with
      other people, I think it's the perfect time to make my childhood dream
      come true.{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
