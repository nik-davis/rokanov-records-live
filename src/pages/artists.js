import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ArtistsList from "../artists/artists"

const ArtistPage = () => {
  return (
    <Layout pageTitle="Artists">
      <ArtistsList />
    </Layout>
  )
}

export const Head = () => <Seo title="Artists" />

export default ArtistPage