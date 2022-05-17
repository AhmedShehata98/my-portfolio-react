import React from "react";
import style from "../../scss/pages/header/localeButton/localeButton.module.css";

function LocaleButton({ headerActive }) {
  return (
    <div className={`${style["locale-button"]}`}>
      <button
        className={
          headerActive >= 90
            ? `${style["scroll_locale"]} btn btn-sm btn-dark`
            : "btn btn-sm btn-dark"
        }
      >
        العربية
      </button>
    </div>
  );
}

export default LocaleButton;
