import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { list, listItem, linkStyle, linkImage } from "./artists.module.css";

const artistLinks = [
  {
    text: "Musician: Nik Davis Zero",
    url: "https://lift.bio/nik0",
    description: "Acoustic Metal",
    image: (
      <StaticImage
        alt="Nik Davis playing on westminster bridge with the Houses of Commons in the background"
        src="../images/artists/01-Nik.png"
      />
    ),
  },
  {
    text: "Artist: Olivia Jane Miles",
    url: "https://www.instagram.com/olivias_drawings__/",
    description: "Artist",
    image: (
      <StaticImage
        alt="Sanctuary Art by Olivia Jane Miles"
        src="../images/artists/02-Olivia.png"
      />
    ),
  },
];

const ArtistsList = () => {
  return (
    <ul className={list}>
      {artistLinks.map((artist) => (
        <li key={artist.url} className={listItem}>
          <span>
            <a
              className={linkStyle}
              href={artist.url}
              target="_blank"
              rel="noreferrer"
            >
              {artist.text}
              <br />
              <div className={linkImage} >
                {artist.image}
              </div>
            </a>
          </span>
          <p>{artist.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
