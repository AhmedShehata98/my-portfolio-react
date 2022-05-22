import React from "react";
import style from "../../scss/pages/header/logo/logo.module.css";
import logo from "../../assets/images/OURATE.png";
import logo_2 from "../../assets/images/OURAT_2.png";

const Logo = ({ toggle }) => {
  return (
    <div className={style.logo}>
      <img src={toggle === true ? logo_2 : logo} alt="Logo" />
    </div>
  );
};

export default Logo;
