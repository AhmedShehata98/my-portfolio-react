import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import "../../scss/pages/header/modeToggler/modeToggler.css";

function ThemeToggler({ themeButton, setThemeButton, headerActive }) {
  // liftn state up to parent component

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

  function toggleTheme() {
    if (themeButton === true) {
      light();
    }
    if (themeButton === false) {
      night();
    }
  }
  function handleToggle() {
    setThemeButton(!themeButton);
    toggleTheme();
  }

  let ThemeButton_Wrapper = "themeBotton-Wrapper";
  if (themeButton && headerActive >= 90) {
    ThemeButton_Wrapper = "themeBotton-Wrapper scroll_themeMode";
  }
  if (themeButton && headerActive < 90) {
    ThemeButton_Wrapper = "themeBotton-Wrapper on";
  }

  // let [localstorage, length] = useLocalStorage("ahmed", "age:24");
  // let [localstorage2, length2] = useLocalStorage("ahmed 2", "age:28");

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
          checked={themeButton}
          id="themeButton"
          onChange={handleToggle}
        />

        <span className="modeIndicator">
          {themeButton === false ? (
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
