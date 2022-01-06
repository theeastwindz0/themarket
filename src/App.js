import React from "react";
import Footer from "./components/BasicComp/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import News from "./components/Pages/News";
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";
import HeaderFull from "./components/BasicComp/HeaderFull";
import SubMenu from "./components/BasicComp/SubMenu";

function App() {

  const CTPgetButtonLocation=(buttons)=>
  {
    //Lifting the state up for passing data from child to Parent Component
    const buttonsRef=buttons;
    }
  return (
    <>
    <BrowserRouter basename="/themarket">


    <HeaderFull/>
    {/* <SubMenu/> */}
   
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
    
    </>
  );
}

export default App;
