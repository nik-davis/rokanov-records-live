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
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/artists" className={navLinkItem}>
              Artists
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkItem}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkItem}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://www.instagram.com/rokanovrecordslive/"
              className={navLinkItem}
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://twitter.com/RokanovRecordsL"
              className={navLinkItem}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://www.facebook.com/RokanovRecordsLive/"
              className={navLinkItem}
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="mailto:nik@rokanovrecordslive.uk" className={navLinkItem} target="_blank" >
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
