import { Link } from 'react-router-dom'
import '../CSS/Button.css'
const Button = (props) => {
    
    return (
       <>
       {props.buttons.map((button,key)=>(
           <Link onClick={props.toggleOff} key={key} className='Button' to={button.location}>{button.title}</Link>
       ))}
       </>
    )
}

export default Button
