import logoImage from '../../images/themarket.png'
import {   } from '@fortawesome/free-brands-svg-icons'
import '../CSS/Header2.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faChartbarsar, faTimesCircle, faWindowClose } from '@fortawesome/free-regular-svg-icons'
const Header2 = () => {
    return (
        <>
        <div className="Header2">

            <label className='logo'>THE MARKET</label>            
            <input type='checkbox' id='check'/>
            <label for='check' className='checkBtn'>
          <i> <FontAwesomeIcon icon={faChartBar} id='btn' /></i>
            </label>
            <ul>
                <li><a href='#HOME'>HOME</a></li>
                <li><a href='#HOME'>SERVICES</a></li>
                <li><a href='#HOME'>CONTACT</a></li>
                <li><a href='#HOME'>ABOUT</a></li>
            </ul>
            
        </div>
        </>
    )
}

export default Header2
