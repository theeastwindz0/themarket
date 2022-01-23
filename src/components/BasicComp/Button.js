import { useContext } from "react";
import { Link } from "react-router-dom";
import "../CSS/Button.css";
import VarContext from "../store/VarContext";
const Button = (props) => {
  const varCtx = useContext(VarContext);
  let style;
  if (varCtx.currentMode === "Light Mode")
    style = { border: "2px solid purple" };
  else style = { border: '2px solid white' };

  return (
    <>
      {props.buttons.map((button, key) => (
        <Link
          onClick={props.toggleOff}
          key={key}
          style={style}
          className="Button"
          to={button.location}
        >
          {button.title}
        </Link>
      ))}
    </>
  );
};

export default Button;
