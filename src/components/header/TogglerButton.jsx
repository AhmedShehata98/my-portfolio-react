import React, { useEffect, useRef } from "react";
import styles from "../../scss/pages/header/TogglerButton/togglerButton.module.css";
const TogglerButton = ({
  headerActive,
  navLinkVisibility,
  setNavLinkVisibility,
}) => {
  const togglerButtonRef = useRef(null);

  // toggle handling function
  function handleNavbartoogler() {
    setNavLinkVisibility(!navLinkVisibility);
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (togglerButtonRef.current !== e.target) {
        setNavLinkVisibility(false);
      }
    });
    return () => {
      document.removeEventListener("click", (e) => {
        if (togglerButtonRef.current !== e.target) {
          setNavLinkVisibility(false);
        }
      });
    };
  });

  return (
    <div>
      <button
        ref={togglerButtonRef}
        type="button"
        className={
          headerActive >= 90
            ? styles.togglerButton + " " + styles.scroll_togglerBTN
            : styles.togglerButton
        }
        onClick={handleNavbartoogler}
      >
        <span>
          <i className="bi bi-list"></i>
        </span>
      </button>
    </div>
  );
};

export default TogglerButton;
