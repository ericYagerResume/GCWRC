import React from "react"
import Layout from "../components/layout"
import Carousel from '../components/homepage/carousel'



const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Carousel />
    </Layout>
  )
}

export default IndexPage