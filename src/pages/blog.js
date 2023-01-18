import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="Blogs">
      <p>Blog posts tbcba</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Blogs" />

export default BlogPage