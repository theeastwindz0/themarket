import '../CSS/Footer.css'
import qrcode from '../../images/qrcode.png'
import {faFirefox,faSafari,faInternetExplorer,faFirefoxBrowser,faEdge,faEdgeLegacy,faChrome} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ButtonContext from '../store/ButtonContext';
const Footer = () => {

    const btnCtx=useContext(ButtonContext);
    return (
        <ButtonContext.Consumer>
            {(ctx=>{
                return(
                <div className="Footer">
                <div className='Footer__left'>
                {/* <img src={qrcode}></img>
                <h4>Scan our Code</h4> */}
                </div>
    
                <div className='Footer_box'>
                    <h4>Fundamentals</h4>
                </div>
    
                <div className='Footer__middle'>
                <h4>Supported Browsers</h4>
                <div className='logos'>
    
                <FontAwesomeIcon className='logo' icon={faFirefox}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faSafari}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faInternetExplorer}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faFirefoxBrowser}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faEdge}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faEdgeLegacy}></FontAwesomeIcon>
                <FontAwesomeIcon className='logo' icon={faChrome}></FontAwesomeIcon>
    
                </div>
                <h3>Copyright &copy; All rights Reserved</h3>
                <h4>Developed by Himanshu Chauhan</h4>
                </div>
                <div className='Footer_box'>
                <h4>Menu</h4>
                {
                    ctx.buttons.map((button,key)=>
                    (
                        <Link key={key} className='button' to={button.location}>{button.title}</Link>
                    ))
                }
                </div>
    
                
                <div className='Footer_right'>
                
                </div>
            </div>
                )
            })}
        
        </ButtonContext.Consumer>
    )
}

export default Footer
