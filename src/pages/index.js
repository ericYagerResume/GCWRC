import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
    <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
  </Layout>
  )
}

export default IndexPage