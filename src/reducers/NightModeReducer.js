const NightModeReducer = (state, { type }) => {
  switch (type) {
    case "LIGHT_MODE":
      console.log("state is =>" + state.idintifer);
      console.log("type is =>" + type);
      return light(state);
    case "NIGHT_MODE":
      console.log("state is =>" + state.idintifer);
      console.log("type is =>" + type);
      return night(state);
    default:
      throw Error("Error your case isn't available");
  }
};

export default NightModeReducer;

const light = (state) => {
  state.toggleMode();
  return (state = {
    //Light mode
    idintifer: true,

    toggleMode: function () {
      // var colors defaultProps

      const varSecondaryClrProp = "--root-second-color";
      const varFontClrProp = "--root-font-color";
      const varOverlayProp = "--root-overlay-color";
      // new colors values

      const secondaryHex = "#D8D8D8";
      const fontHex = "#111";
      const overlayColor = "#f6f6f6";

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
  });
};

const night = (state) => {
  state.toggleMode();
  return (state = {
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
  });
};
