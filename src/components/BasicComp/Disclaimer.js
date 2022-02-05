import React, { useState } from "react";
import styles from "../CSS/Disclaimer.module.css";
import logo from "../../images/themarket.png";
import uStyles from "../CSS/Universal.module.css";

const Disclaimer = (props) => {
  document.body.classList.add(uStyles.stop_scrolling);
  const [isChecked, setIsChecked] = useState(false);

  const onAccept = (event) => {
    if (event.target.checked === true) setIsChecked(true);
    else setIsChecked(false);
  };

  const onDisclaimerAccept = (event) => {
    if (isChecked) {
      props.dAccept();
    }
  };
  return (
    <React.Fragment>
      <div className={styles.disclaimer_modal}>
        <div className={styles.disclaimer_box}>
          <div className={styles.branding}>
            <img src={logo}></img>
            <span className={styles.branding_text}>THE MARKET</span>
          </div>
          <h3>DISCLAIMER , PLEASE READ CAREFULLY.</h3>
          <p>
            Every effort has been made to accurately represent our ,programs and
            the educational value they provide. However, there is no guarantee
            that you will earn any money using the techniques and ideas in these
            material.
          </p>
          <p>
            When we present revenue and Sale figures on our website and our
            other channels, we are showcasing exceptional results, which do not
            reflect the average experience.
          </p>
          <p>
            You should not rely on any revenue, sales, or earnings information
            we present as any kind of promise, guarantee, or expectation of any
            level of success earning.
          </p>
          <p>
            Your results will be determined by a number of factor over which we
            have no control, such as your financial condition, experiences,
            Skills, 'level of effort, education, and change within the market.
          </p>
          <p>
            By continuing to use our Site and access our content,you agree that
            we are not responsible for any decision you may make regards any
            information provided in this website.
          </p>
          <div className={styles.form}>
            <div>
              <input onClick={onAccept} id="accept" type="checkbox"></input>
              <span className={styles.agreement}>
                I agree with all the above terms and conditions.
              </span>
            </div>

            <button
              className={`${
                isChecked ? styles.disabled_off : styles.disabled_on
              }`}
              onClick={onDisclaimerAccept}
            >
              ACCEPT
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Disclaimer;
