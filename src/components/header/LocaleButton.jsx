import React, { useContext } from "react";
import style from "../../scss/pages/header/localeButton/localeButton.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";

function LocaleButton({ headerActive }) {
  const {
    languages: { lang },
  } = useContext(siteDataCtx);
  const {
    languages: {
      header: { LocaleButton },
    },
    setLanguage,
  } = useContext(siteDataCtx);

  function switchArabic() {
    let varfontFamilyProp = "--bs-body-font-family";
    let fontFamilyProp = ' "Cairo", sans-serif ';
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.documentElement.style.setProperty(
      varfontFamilyProp,
      fontFamilyProp
    );
    // document.body.fontFamily = ' "Cairo", sans-serif !important';
    setLanguage("ar");
  }
  function switchEnglish() {
    let varfontFamilyProp = "--bs-body-font-family";
    let fontFamilyProp = ' "Roboto Mono", monospace ';
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.documentElement.style.setProperty(
      varfontFamilyProp,
      fontFamilyProp
    );
    // font-family: 'Roboto Mono', monospace;
    setLanguage("en");
  }

  const handleLocaleChange = () => {
    lang === "en" ? switchArabic() : switchEnglish();
  };

  // console.log((document.documentElement.style.direction = "rtl"));
  return (
    <div className={`${style["locale-button"]}`}>
      <button
        className={
          headerActive >= 90
            ? `${style["scroll_locale"]} btn btn-sm btn-dark`
            : "btn btn-sm btn-dark"
        }
        onClick={() => handleLocaleChange()}
      >
        {LocaleButton}
      </button>
    </div>
  );
}

export default LocaleButton;
