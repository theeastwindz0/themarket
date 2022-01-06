import React, { useEffect } from "react";
import Article2 from "../BasicComp/Article2";
import Parallex from "../BasicComp/Parallex";
import Container__17 from "../../images/Container__17.jpeg";
import Article from "../BasicComp/Article";
import developer from '../../images/about_the_developer.jpeg'

function About() {
  



  const dataToSend = {
    parallexImage: Container__17,
    parallexTitle: "ABOUT US",
    parallexText: "The Serious Project",
    articleImage:developer,
    articleImageRad:'50%',
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

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Parallex dataToSend={dataToSend}/>
      <Article dataToSend={dataToSend}/>
      {/* <Article2 /> */}
    </div>
  );
}

export default About;