import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="Home Page" />

export default IndexPage