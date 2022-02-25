import React, { useEffect } from "react";
import Parallex from "../BasicComp/Parallex";
import Container__17 from "../../images/Container__17.jpeg";
import Article from "../BasicComp/Article";
import developer from '../../images/about_the_developer.jpeg'
import Container__10 from '../../images/Container__10.jpeg'
function About() {
  

  const myStyle = {
    borderRadius: '50%',
    width:'200px',
  };

  const dataToSend = {
    parallexImage: Container__17,
    parallexTitle: "ABOUT US",
    parallexText: "The Serious Project",
    articleImage:developer,
    articleHeading:"ABOUT THE DEVELOPER",
    title1:'Himanshu Chauhan',
    title2:'',
    title3:'',
    title4:'',
    para1:'Stock trading is one of my favourite thing , being busy with the academics I rarely get time for  Intraday trading , Also programming is something my soul always craved for , its hard to blend two passions which you love but luckily this isn\'t a big deal ! This was started as a  part of the mini project which surely won\'t end up there , taking this to higher level , creating some kind of financial product will be my priority .' ,
    para2:' ',
    para3:'',
    para4:'',
  };

  const dataToSend2={
    articleImage: Container__10,
    articleHeading:"",
    title1:'ABOUT US',
    title2:'',
    title3:'ABOUT THE DEVELOPER',
    title4:'Thanks for paying us a visit.',
    para1:'On this website you will find data related to the stock market. But it\'s About section that introduces to the developer that makes this website an endless inspiration.' ,
    para2:'Furthermore, every bit of content you’ll find on this site oozes with passion,  and resourcefulness.',
    para3:'Stock trading is one of my favourite thing , being busy with the academics I rarely get time for  Intraday trading , Also programming is something my soul always craved for , its hard to blend two passions which you love but luckily this isn\'t a big deal ! This was started as a  part of the mini project which surely won\'t end up there , taking this to higher level , creating some kind of financial product will be my priority .',
    para4:'',
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Parallex dataToSend={dataToSend}/>
      {/* <Article myStyle={myStyle} dataToSend={dataToSend}/> */}
      <Article dataToSend={dataToSend2}/>
      {/* <Article2 /> */}
    </div>
  );
}

export default About;