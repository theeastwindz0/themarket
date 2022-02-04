import React from "react";
import styles from "../CSS/TestimonialsBox.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TestimonialsBox = (props) => {
  const tStars = [];

  for (let i = 0; i < props.dataToSend.stars; i++) {
    tStars.push("1");
  }

  return (
    <div className={styles.box}>
      <div className={styles.box_image}>
        <img src={props.dataToSend.tImage}></img>
      </div>
      <div className={styles.box_text}>
        <div className={styles.icons}>
          {tStars.map((value,i) => (
            <FontAwesomeIcon key={`${props.dataToSend.tName}_star_${i}`} icon={faStar} />
          ))}
        </div>
        <p>{props.dataToSend.tAbout}</p>
        <h3>{props.dataToSend.tName}</h3>
      </div>
    </div>
  );
};

export default TestimonialsBox;
