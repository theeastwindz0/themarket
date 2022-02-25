import React,{useEffect} from 'react';
import Form from '../BasicComp/Form';
import Container__14 from '../../images/Container__14.jpeg'
import Parallex from '../BasicComp/Parallex';
const Contact = () => {
  
  const dataToSend={
    parallexImage: Container__14,
    parallexTitle: "CONTACT US",
    parallexPara: "Your queries are most welcomed",
  }
  useEffect(() => {
    window.scroll(0,0)
  }, []);


  async function contactFormHandler(contact)
  {   
    
    const response=await fetch('https://react-main-81fce-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',
    {
      method:'POST',
      body:JSON.stringify(contact),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data=await response.json();
  }
  return (
     <React.Fragment>
       <Parallex dataToSend={dataToSend}/>
         <Form formDataSubmit={contactFormHandler}/>
     </React.Fragment>
  ) 
};

export default Contact;
