import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PianoLid from "../images/Piano__lid.svg"
import PianoKeybed from "../images/Piano__keybed.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Sid Lee</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <PianoLid />
    <PianoKeybed />
    <p>
      <Link to="/about/">Read More</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
