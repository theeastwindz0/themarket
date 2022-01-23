import "../CSS/SubMenu.css";
import { useContext, useRef } from "react";
import VarContext from "../store/VarContext";

const SubMenu = () => {
  const buttonModeRef = useRef();
  const varCtx = useContext(VarContext);
  let test = false;
  function CheckboxButton(event) {
    if (event.target.checked) {
      varCtx.darkMode();
    } else {
      varCtx.lightMode();
    }
  }


  return (
    <div className="SubMenu">
      <div className="SubMenu__text">{varCtx.currentMode}</div>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={varCtx.currentMode === "Light Mode"?false:true}
            ref={buttonModeRef}
            onClick={CheckboxButton}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default SubMenu;
function newFunction(varCtx, buttonModeRef) {
  if (varCtx.currentMode === "Light Mode") {
    buttonModeRef.current.checked = false;
  }
}
