import * as React from "react";
import { list, listItem, linkStyle } from "./artists.module.css";

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

const ArtistsList = () => {
  return (
    <div>
      <ul style={list}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItem, color: link.color }}>
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
    </div>
  );
};

export default ArtistsList;
