import React from "react";
import Footer from "./components/BasicComp/Footer";
import Header from "./components/BasicComp/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import News from "./components/Pages/News";
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";
import Header2 from "./components/BasicComp/Header2";
function App() {

  const CTPgetButtonLocation=(buttons)=>
  {
    //Lifting the state up for passing data from child to Parent Component
    const buttonsRef=buttons;
    }
  return (
    <>
    <BrowserRouter basename="/themarket">
    <Header passLocation={CTPgetButtonLocation} />

    {/* <Header2/> */}

   
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
