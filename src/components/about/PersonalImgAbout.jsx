import React from "react";
import styles from "../../scss/pages/about/personalImgAbout/personalImgAbout.module.css";
import PersonalImgAboutSrc from "../../assets/images/personal_img-2.jpg";

const PersonalImgAbout = () => {
  return (
    <div className={styles["personalImg-box"]}>
      <img src={PersonalImgAboutSrc} alt="my-personal-img" />
    </div>
  );
};

export default PersonalImgAbout;
