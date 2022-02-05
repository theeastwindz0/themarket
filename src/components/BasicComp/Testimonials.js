import React from "react";
import styles from "../CSS/TestimonialsBox.module.css";
import TestimonialsBox from "./TestimonialsBox";
import model_01 from '../../images/model_01.jpg';
import model_02 from '../../images/model_02.jpg';
import model_03 from '../../images/model_03.jpg';


const Testimonials = () => {

  const dataToSend=[
    {
      tName:'Sophie Pary',
      tAbout:'Site works fine , design is quite good.',
      tImage: model_01,
      stars:5
    },
    {
      tName:'Alex Jersey',
      tAbout:'I\'m impressed by the charting software , Improvements could be made.',
      tImage: model_02,
      stars:4
    },
    {
      tName:'Sara Williams',
      tAbout:'I loved the service provided by the developers.',
      tImage: model_03,
      stars:5
    }
  ]


  
  return (
    <React.Fragment>
      <h1 className={styles.heading} >TESTIMONIALS</h1>
      <div className={styles.testimonials}>
        <TestimonialsBox dataToSend={dataToSend[0]}/>
        <TestimonialsBox dataToSend={dataToSend[1]}/>
        <TestimonialsBox dataToSend={dataToSend[2]}/>
    
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
