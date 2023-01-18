import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import ArtistsList from "../artists/artists"

const socialLinks = [
  {
    text: "Instagram",
    url: "https://www.instagram.com/rokanovrecordslive/",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/RokanovRecordsL",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/RokanovRecordsLive/",
  },
  {
    text: "E-Mail",
    url: "mailto:nik@rokanovrecordslive.uk",
  },
];


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <ArtistsList />
      <ul>
        {socialLinks.map((link) => (
          <li key={link.url}>
            <span>
              <a href={link.url}>{link.text}</a>
            </span>
          </li>
        ))}
      </ul>
      <StaticImage alt="Rokanov Records Logo" src="../images/logo-small.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
