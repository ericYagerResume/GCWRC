import React from "react"
import Layout from "../components/layout"
import Carousel from '../components/homepage/carousel'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)



const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Carousel />
    </Layout>
  )
}

export default IndexPage