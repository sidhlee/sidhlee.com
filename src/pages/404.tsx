import * as React from "react"

import Layout from "../features/layout/Layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout currentPath="404">
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist..😢</p>
  </Layout>
)

export default NotFoundPage
