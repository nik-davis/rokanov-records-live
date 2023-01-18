import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";


const listStyles = {
  marginBottom: 20,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 20,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const links = [
  {
    text: "Musician: Nik Davis Zero",
    url: "https://lift.bio/nik0",
    description: "Acoustic Metal",
    color: "#000000",
  },
  {
    text: "Artist: Olivia Jane Miles",
    url: "https://www.instagram.com/olivias_drawings__/",
    description: "Artist",
    color: "#000000",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/rokanovrecordslive/",
    description: "",
    color: "#000000",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/RokanovRecordsL",
    description: "",
    color: "#000000",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/RokanovRecordsLive/",
    description: "",
    color: "#000000",
  },
  {
    text: "E-Mail",
    url: "mailto:nik@rokanovrecordslive.uk",
    description: "",
    color: "#000000",
  },
];

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p></p>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {/* <p style={descriptionStyle}>{link.description}</p> */}
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
