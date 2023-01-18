import * as React from "react";
import { list, listItem, linkStyle } from "./artists.module.css";

const links = [
  {
    text: "Musician: Nik Davis Zero",
    url: "https://lift.bio/nik0",
    description: "Acoustic Metal",
  },
  {
    text: "Artist: Olivia Jane Miles",
    url: "https://www.instagram.com/olivias_drawings__/",
    description: "Artist",
  },
];

const ArtistsList = () => {
  return (
    <ul className={list}>
      {links.map((link) => (
        <li key={link.url} className={listItem}>
          <span>
            <a
              className={linkStyle}
              href={link.url}
            >
              {link.text}
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
