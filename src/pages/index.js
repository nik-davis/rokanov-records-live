import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to Home Page</p>
      <StaticImage
        alt="Rokanov Records Logo"
        src="../images/logo-small.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage