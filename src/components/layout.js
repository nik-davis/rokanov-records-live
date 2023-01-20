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
  navLinkItem,
  navLinkItemLink,
  navLinkItemLeft,
  navLinkItemMiddle,
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
          {/* Left Side */}
          <li className={navLinkItem}>
            <Link to="/" className={navLinkItemLink}>
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/artists" className={navLinkItemLink}>
              Artists
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkItemLink}>
              Blog
            </Link>
          </li>
          {/* Right Side */}
          <li className={navLinkItemRight}>
            <a
              href="mailto:nik@rokanovrecordslive.uk"
              className={navLinkItemLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a
              href="https://www.facebook.com/RokanovRecordsLive/"
              className={navLinkItemLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a
              href="https://twitter.com/RokanovRecordsL"
              className={navLinkItemLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <a
              href="https://www.instagram.com/rokanovrecordslive/"
              className={navLinkItemLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className={navLinkItemRight}>
            <Link to="/about" className={navLinkItemLink}>
              About
            </Link>
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
