import React, { useEffect, useState } from "react";
import useSuperState from "../../hooks/useSuperState";

import styles from "../../scss/pages/header/header.module.css";

// import component
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import NavigationLinks from "./NavigationLinks";
import TogglerButton from "./TogglerButton";

const Header = () => {
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);
  const [headerActive, setHeaderActive] = useState(0);
  const [superState, setSuperState] = useSuperState("themeValue", true); // true light mode -- false for night mode

  useEffect(() => {
    window.addEventListener("scroll", () => setHeaderActive(window.scrollY));
  });

  return (
    <header
      className={
        headerActive >= 90 ? styles.scroll + " " + styles.header : styles.header
      }
    >
      <section className={`${styles.Headercontainer} container`}>
        <Logo toggle={superState} />
        <NavigationLinks
          navLinkVisibility={navLinkVisibility}
          headerActive={headerActive}
        />
        <ThemeToggler
          headerActive={headerActive}
          superState={superState}
          setSuperState={setSuperState}
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
