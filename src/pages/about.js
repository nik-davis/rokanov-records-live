import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>0 cost, 0 hours, 0 expectations. Thatโs the Roka Code ๐ดโโ ๏ธ</p>
      <p>Established 2016 ๐ช๐บ Dissolved 2017 ๐ Revived 2022 ๐คโฅ๏ธ๐ถ</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
