import React, { useEffect, useState, memo } from "react";
import styles from "../../scss/pages/header/header.module.css";

// import component
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import NavigationLinks from "./NavigationLinks";
import TogglerButton from "./TogglerButton";

const Header = () => {
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);
  const [themeButton, setThemeButton] = useState(true);
  const [headerActive, setHeaderActive] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setHeaderActive(window.scrollY));
  });

  console.log(headerActive);
  return (
    <header
      className={
        headerActive >= 90 ? styles.scroll + " " + styles.header : styles.header
      }
    >
      <section className={`${styles.Headercontainer} container`}>
        <Logo toggle={themeButton} />
        <NavigationLinks
          navLinkVisibility={navLinkVisibility}
          headerActive={headerActive}
        />
        <ThemeToggler
          themeButton={themeButton}
          setThemeButton={setThemeButton}
          headerActive={headerActive}
        />
        <TogglerButton
          navLinkVisibility={navLinkVisibility}
          setNavLinkVisibility={setNavLinkVisibility}
          headerActive={headerActive}
        />
      </section>
    </header>
  );
};
export default Header;
