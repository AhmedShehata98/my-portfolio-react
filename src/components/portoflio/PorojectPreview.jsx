import React, { useContext, useRef } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/potfolio/projectsPreview/projectPreview.module.css";
import { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PorojectPreview() {
  const {
    portfolio: { projects },
  } = useContext(siteDataCtx);

  const projectsList = projects.map(
    ({ discription, name, projectIMG }, index) => {
      return (
        <SwiperSlide key={index}>
          <div className={styles["slider"]}>
            <img src={projectIMG} alt={name} />
            <div className={styles["information"]}>
              <h3 className={styles["projectName"] + " " + "display-6"}>
                {name}
              </h3>
              <p className={styles["projectDescription"]}>{discription}</p>
              <div>
                <a href="" className={styles["getSource"]}>
                  <button type="button" className={styles["getSource"]}>
                    1
                  </button>
                </a>

                <a href="" className={styles["getDemo"]}>
                  <button type="button">2</button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  );

  return (
    <div className={styles["previewParent"]}>
      <Swiper>{projectsList}</Swiper>
    </div>
  );
}

export default PorojectPreview;
