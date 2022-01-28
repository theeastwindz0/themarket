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
let buttonsRef;

function App() {

  // const CTPgetButtonLocation=(buttons)=>
  // {
  //   //Lifting the state up 
  //   const buttonsRef=buttons;
  //   }

  //Temporary will be fixed later 

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

    // console.log('Inside' +buttonsRef)
  //  buttonsRef=buttons;
  }
  // console.log('Outside' +buttonsRef);

 
  
  return (
    <VarContextProvider>
    {/* <BrowserRouter basename="/themarket"> */}


    <HeaderFull getButtons={getButtons}/>
    {/* <SubMenu/> */}
   
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer buttons={buttons}/>

    {/* </BrowserRouter> */}
    
    </VarContextProvider>
  );
}

export default App;
