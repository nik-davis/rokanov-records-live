import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  headingContainer,
  heading,
  contentContainer,
  navLinks,
  navLinkItemLeft,
  navLinkItemRight,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={headingContainer}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItemLeft}>
            <Link to="/" className={navLinkText}>
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={navLinkItemLeft}>
            <Link to="/artists" className={navLinkText}>
              Artists
            </Link>
          </li>
          <li className={navLinkItemLeft}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItemLeft}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItemRight}>
            <a href="https://www.instagram.com/rokanovrecordslive/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a href="https://twitter.com/RokanovRecordsL">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a href="https://www.facebook.com/RokanovRecordsLive/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a href="mailto:nik@rokanovrecordslive.uk">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={contentContainer}>
        <main className={contentContainer}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
