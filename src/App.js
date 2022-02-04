import React from "react";
import Footer from "./components/BasicComp/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import News from "./components/Pages/News";
import Contact from './components/Pages/Contact'
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";
import HeaderFull from "./components/BasicComp/HeaderFull";
import { VarContextProvider } from "./components/store/VarContext";
import UStop from "./components/Pages/UStop";


function App() {


  const buttons=[{
    title:'HOME',
    location:'/'
},
{
    title:'NEWS',
    location:'news'
},
{
    title:'CONTACT',
    location:'contact'
},
{
    title:'ABOUT',
    location:'about'
}]

  let buttonsRef=[];
  function getButtons(buttons)
  {
    buttons.map((button,key)=>(
      buttonsRef.push(button)
    ))
  }

  return (
    <VarContextProvider>

    <HeaderFull/>  
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/news' element={<News/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/ustop' element={<UStop/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    
    </VarContextProvider>
  );
}

export default App;
