import React, { useContext } from "react";
import "../CSS/Article2.css";
import VarContext from "../store/VarContext";

function Article2(props) {
  const varCtx =useContext(VarContext);
  let style;
  // if(varCtx.currentMode==='Light Mode')
  // {
  //    style={'boxShadow':'0 4px 8px 0 rgb(228, 228, 228)'}
  // }
  // else{
  //    style={'boxShadow':'0 4px 8px 0 rgb(55 55 55)'}
  // }
  
  return (
    <>
      <div className="title">
        <h2>{props.dataToSend.article2.heading}</h2>
        
        <p>{props.dataToSend.article2.headingQuote}</p>
      </div>
      <div className="article2">
        <div style={style} className="article2__box1">
        <img src={props.dataToSend.article2.image1}></img>
        <p>{props.dataToSend.article2.para1}</p>
          
        </div>
        <div style={style} className="article2__box1">
        <img src={props.dataToSend.article2.image2}></img>
          <p>
          {props.dataToSend.article2.para2}
          </p>
        </div>
        <div style={style} className="article2__box1">
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
