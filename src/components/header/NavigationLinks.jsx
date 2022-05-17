import React, { useContext } from "react";
import styles from "../../scss/pages/header/navigationLinks/NavigationLinks.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import LocaleButton from "./LocaleButton";

const NavigationLinks = ({ navLinkVisibility, headerActive }) => {
  const siteData = useContext(siteDataCtx);

  let {
    header: {
      navLinks: {
        navLinkHome,
        navLinkAbout,
        navLinkSkills,
        navLinkPortfolio,
        navLinkContent,
      },
    },
  } = siteData;

  return (
    <div
      className={
        !navLinkVisibility
          ? styles["navigation-links"]
          : styles["navigation-links"] + " " + styles["open"]
      }
    >
      <nav className={styles["navigation-box"]}>
        <a
          className={
            headerActive >= 90
              ? styles.Links + " " + styles.scroll_link
              : styles.Links
          }
          href="#Home"
        >
          {navLinkHome}
        </a>
        <a
          className={
            headerActive >= 90
              ? styles.Links + " " + styles.scroll_link
              : styles.Links
          }
          href="#About"
        >
          {navLinkAbout}
        </a>
        <a
          className={
            headerActive >= 90
              ? styles.Links + " " + styles.scroll_link
              : styles.Links
          }
          href="#Skills"
        >
          {navLinkSkills}
        </a>
        <a
          className={
            headerActive >= 90
              ? styles.Links + " " + styles.scroll_link
              : styles.Links
          }
          href="#Portfolio"
        >
          {navLinkPortfolio}
        </a>
        <a
          className={
            headerActive >= 90
              ? styles.Links + " " + styles.scroll_link
              : styles.Links
          }
          href="#Contacts"
        >
          {navLinkContent}
        </a>
      </nav>
      <LocaleButton headerActive={headerActive} />
    </div>
  );
};

export default NavigationLinks;
