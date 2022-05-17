import React, { useContext, useEffect } from "react";
import { colorsMode } from "../../contexts/NightMode";
import style from "../../scss/pages/header/logo/logo.module.css";
import logo from "../../assets/images/OURATE.png";
import logo_2 from "../../assets/images/OURAT_2.png";

const Logo = ({ toggle }) => {
  // const {
  //   mode: { id },
  // } = useContext(colorsMode);
  // let LOGO_IMG;
  //   toggle === false && logo
  //   toggle !== false && logo_2

  return (
    <div className={style.logo}>
      <img src={toggle !== false ? logo : logo_2} alt="Logo" />
    </div>
  );
};

export default Logo;
