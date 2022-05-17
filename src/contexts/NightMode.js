import React, { createContext, useReducer } from "react";
import NightModeReducer from "../reducers/NightModeReducer";
import logoLightMode from "../assets/images/OURATE.png";
import logoNightMode from "../assets/images/OURAT_2.png";

export const colorsMode = createContext();
colorsMode.displayName = "ThemeData";

let theme = {
  //night mode
  idintifer: false,

  toggleMode: function () {
    // var colors defaultProps

    const varSecondaryClrProp = "--root-second-color";
    const varFontClrProp = "--root-font-color";
    const varOverlayProp = "--root-overlay-color";
    // new colors values

    const secondaryHex = "#041417";
    const fontHex = "#eeffee";
    const overlayColor = "#01010e";

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
  },
};

const ColorsModeProvider = ({ children }) => {
  const [newTheme, dispatch] = useReducer(NightModeReducer, theme);

  return (
    <colorsMode.Provider
      value={{
        dispatchMode: dispatch,
        mode: newTheme,
      }}
    >
      {children}
    </colorsMode.Provider>
  );
};

export default ColorsModeProvider;
