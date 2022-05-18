import React from "react";
import styles from "../../scss/pages/home/personalIMG/PersonalIMG.module.css";
import personalIMGSrc from "../../assets/images/perosnal_img_1.webp";

const PersonalIMG = () => {
  return (
    <div className={styles["img-wrapper"]}>
      <div className={styles["main-img"]}>
        <img src={personalIMGSrc} alt="my-personal-img" />
      </div>
    </div>
  );
};

export default PersonalIMG;
