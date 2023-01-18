import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import ArtistsList from "../artists/artists"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <ArtistsList />
      <StaticImage alt="Rokanov Records Logo" src="../images/logo-small.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
