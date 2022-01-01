import '../CSS/Button.css'
const Button = (props) => {
    return (
       <>

       {props.buttons.map((button,key)=>(
           <a className='Button' href={button.location}>{button.title}</a>
       ))}
       
       

       </>
    )
}

export default Button
