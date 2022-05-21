import React, { useContext } from "react";
import styles from "../../scss/pages/header/navigationLinks/NavigationLinks.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import LocaleButton from "./LocaleButton";

const NavigationLinks = ({ navLinkVisibility, headerActive }) => {
  const siteData = useContext(siteDataCtx);

  let {
    languages: {
      header: { navLinks },
    },
  } = siteData;

  const navbarLinks = Object.values(navLinks).map((link) => {
    return (
      <a
        className={
          headerActive >= 90
            ? styles.Links + " " + styles.scroll_link
            : styles.Links
        }
        href={`#${link}`}
      >
        {link}
      </a>
    );
  });

  return (
    <div
      className={
        !navLinkVisibility
          ? styles["navigation-links"]
          : styles["navigation-links"] + " " + styles["open"]
      }
    >
      <nav className={styles["navigation-box"]}>{navbarLinks}</nav>
      <LocaleButton headerActive={headerActive} />
    </div>
  );
};

export default NavigationLinks;
