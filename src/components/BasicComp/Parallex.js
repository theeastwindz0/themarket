import '../CSS/Parallex.css'
const Parallex = (props) => {

    const myStyle={
        backgroundImage: `url(${props.dataToSend.parallexImage})`
    }
    return (
       <>
       <div style={myStyle} className="Parallex">
           <div  className='parallex__text'>
               <h1>{props.dataToSend.parallexTitle}</h1>
               <p>{props.dataToSend.parallexPara}</p>
           </div>
       </div>
       </>
    )
}

export default Parallex
