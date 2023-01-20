import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Rokanov Records Live">
      <p>A record label for everyone</p>
      <br />
      <StaticImage alt="Rokanov Records Logo" src="../images/logo-small.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Welcome to Rokanov Records Live" />;

export default IndexPage;
