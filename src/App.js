import React, { useState, useEffect } from "react";
import Footer from "./components/BasicComp/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import News from "./components/Pages/News";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";
import HeaderFull from "./components/BasicComp/HeaderFull";
import { VarContextProvider } from "./components/store/VarContext";
import UStop from "./components/Pages/UStop";
import Disclaimer from "./components/BasicComp/Disclaimer";
import uStyles from "./components/CSS/Universal.module.css";

function App() {
  const [disc, setDisc] = useState(true);

  const buttons = [
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
  ];

  const disclaimerAccept = () => {
    localStorage.setItem("disclaimerAccept", 0);
    document.body.classList.remove(uStyles.stop_scrolling);
    setDisc(false);
  };

  useEffect(() => {
    const disclaimerAcceptInfo = localStorage.getItem("disclaimerAccept");

    if (disclaimerAcceptInfo === "0") {
      setDisc(false);
      document.body.classList.remove(uStyles.stop_scrolling);
    }
  }, []);

  return (
    <VarContextProvider>
      {disc && <Disclaimer dAccept={disclaimerAccept} />}
      <HeaderFull />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ustop" element={<UStop />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </VarContextProvider>
  );
}

export default App;
