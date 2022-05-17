import React from "react";
import styles from "../../scss/pages/header/TogglerButton/togglerButton.module.css";
function TogglerButton({
  headerActive,
  navLinkVisibility = { navLinkVisibility },
  setNavLinkVisibility,
}) {
  const handleNavbartoogler = () => {
    setNavLinkVisibility(!navLinkVisibility);
  };

  return (
    <div>
      <button
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
}

export default TogglerButton;
