import "../CSS/HeaderFull.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/themarket.png";
import SubMenu from "./SubMenu";
import ButtonContext from "../store/ButtonContext";
import React from "react";
import { Link } from "react-router-dom";

const  HeaderFull = () => {
  function navToggleOn() {
    document.getElementById("overlay").style.left = "0%";
  }

  function navToggleOff() {
    document.getElementById("overlay").style.left = "-100%";
  }

  return (
    <ButtonContext.Consumer>
      {(ctx) => {
        return (
          <React.Fragment>
            <div className="HeaderShow">
              <Link to='/'>
               <img src={logo} />
              </Link>
              <a className="HeaderShow__left">THE MARKET</a>
              <div onClick={navToggleOn} className="HeaderShow__right">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <div className="HeaderFull" id="overlay">
              <div onClick={navToggleOff} className="overlay__button">
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>

              <div className="HeaderFull__overlay">
                <Button toggleOff={navToggleOff} buttons={ctx.buttons} />
                <SubMenu />
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </ButtonContext.Consumer>
  );
};

export default HeaderFull;
