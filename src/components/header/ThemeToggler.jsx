import React from "react";

import "../../scss/pages/header/modeToggler/modeToggler.css";

function ThemeToggler({ headerActive, setSuperState, superState }) {
  const light = () => {
    // var colors defaultProps

    const varSecondaryClrProp = "--root-second-color";
    const varFontClrProp = "--root-font-color";
    const varOverlayProp = "--root-overlay-color";
    // new colors values

    const secondaryHex = "#D8D8D8";
    const fontHex = "#111";
    const overlayColor = "#b1cdc2";

    document.documentElement.style.setProperty(
      varSecondaryClrProp,
      secondaryHex
    );
    document.documentElement.style.setProperty(varFontClrProp, fontHex);
    document.documentElement.style.setProperty(varOverlayProp, overlayColor);
    document.documentElement.style.setProperty("--bs-body-bg", secondaryHex);

    let secondaryClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varSecondaryClrProp);
    let fontClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varFontClrProp);
    let overlayClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varOverlayProp);

    return {
      secondaryColor: secondaryClr,
      fontColor: fontClr,
      overlayColor: overlayClr,
    };
  };
  const night = () => {
    // var colors defaultProps

    const varSecondaryClrProp = "--root-second-color";
    const varFontClrProp = "--root-font-color";
    const varOverlayProp = "--root-overlay-color";
    // new colors values

    const secondaryHex = "#041417";
    const fontHex = "#eeffee";
    const overlayColor = "#17201c";

    document.documentElement.style.setProperty(
      varSecondaryClrProp,
      secondaryHex
    );
    document.documentElement.style.setProperty(varFontClrProp, fontHex);
    document.documentElement.style.setProperty(varOverlayProp, overlayColor);
    document.documentElement.style.setProperty("--bs-body-bg", secondaryHex);

    let secondaryClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varSecondaryClrProp);
    let fontClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varFontClrProp);
    let overlayClr = getComputedStyle(
      document.documentElement
    ).getPropertyPriority(varOverlayProp);

    return {
      secondaryColor: secondaryClr,
      fontColor: fontClr,
      overlayColor: overlayClr,
    };
  };

  window.addEventListener("load", toggleTheme());

  function toggleTheme() {
    if (superState === true) {
      light();
    }
    if (superState === false) {
      night();
    }
  }
  function handleToggle() {
    toggleTheme();
    setSuperState(!superState);
  }

  let ThemeButton_Wrapper = "themeBotton-Wrapper";
  if (superState && headerActive >= 90) {
    ThemeButton_Wrapper = "themeBotton-Wrapper scroll_themeMode";
  }
  if (superState && headerActive < 90) {
    ThemeButton_Wrapper = "themeBotton-Wrapper on";
  }

  return (
    <div className="buttonBox">
      <label
        htmlFor="themeButton"
        className={ThemeButton_Wrapper}
        onChange={handleToggle}
      >
        <input
          className="theme-Button"
          type="checkbox"
          name="theme Button"
          checked={superState}
          id="themeButton"
          onChange={() => handleToggle()}
        />

        <span className="modeIndicator">
          {superState === true ? (
            <i
              className="bi bi-brightness-high-fill"
              style={{ color: "#EC994B" }}
            ></i>
          ) : (
            <i
              className="bi bi-moon-stars-fill"
              style={{ color: "#A91079" }}
            ></i>
          )}
        </span>
      </label>
    </div>
  );
}

export default React.memo(ThemeToggler);
