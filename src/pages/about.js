import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>0 cost, 0 hours, 0 expectations. That’s the Roka Code 🏴‍☠️</p>
      <p>Established 2016 🇪🇺 Dissolved 2017 💔 Revived 2022 🤘♥️🎶</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
