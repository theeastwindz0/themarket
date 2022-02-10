import React from "react";

const ButtonContext = React.createContext({
  buttons: [
    {
      title: "HOME",
      location: "/",
    },
    {
      title: "NEWS",
      location: "news",
    },
    {
      title: "CONTACT",
      location: "contact",
    },
    {
      title: "ABOUT",
      location: "about",
    },
    {
      title: "USTOP",
      location: "ustop",
    },
    {
       title: "CHART",
       location: "chart" 
    },
  ],
});

export default ButtonContext;
