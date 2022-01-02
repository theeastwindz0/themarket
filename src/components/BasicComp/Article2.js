import React from "react";
import "../CSS/Article2.css";

function Article2(props) {
  return (
    <>
      <div className="title">
        <h2>{props.dataToSend.article2.heading}</h2>
        
        <p>{props.dataToSend.article2.headingQuote}</p>
      </div>
      <div className="article2">
        <div className="article2__box1">
        <img src={props.dataToSend.article2.image1}></img>
        <p>{props.dataToSend.article2.para1}</p>
          
        </div>
        <div className="article2__box1">
        <img src={props.dataToSend.article2.image2}></img>
          <p>
          {props.dataToSend.article2.para2}
          </p>
        </div>
        <div className="article2__box1">
        <img src={props.dataToSend.article2.image3}></img>
        <p>
        {props.dataToSend.article2.para3}
        </p>
        </div>
      </div>
    </>
  );
}

export default Article2;
