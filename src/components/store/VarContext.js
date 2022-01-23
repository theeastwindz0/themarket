import React, { useState, useContext, useEffect } from "react";

const VarContext = React.createContext({
  currentMode: "Light Mode",
  lightMode: () => {},
  darkMode: () => {},
});

export const VarContextProvider = (props) => {
  const [modeTitle, setModeTitle] = useState("Light Mode");

  const darkMode = () => {
    document.getElementById("root").style.backgroundColor = "black";
    document.getElementById("root").style.color = "white";
    setModeTitle("Dark Mode");
    localStorage.setItem('currentMode','0')
  };
  const lightMode = () => {
    document.getElementById("root").style.backgroundColor = "white";
    document.getElementById("root").style.color = "black";
    setModeTitle("Light Mode");
    localStorage.setItem('currentMode','1')
  };

  useEffect(() => {
    const colorInfo=localStorage.getItem('currentMode');

    if(colorInfo==='1')
    {
        lightMode();
    }
    else if(colorInfo==='0'){
        darkMode();
    }
  }, []);
  

  return (
    <VarContext.Provider
      value={{ currentMode: modeTitle, lightMode: lightMode,darkMode:darkMode }}
    >
        {props.children}
    </VarContext.Provider>
  );
};

export default VarContext;
