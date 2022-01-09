import '../CSS/HeaderFull.css'
import Button from './Button'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle  } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/themarket.png'
import SubMenu from './SubMenu'


const HeaderFull = (props) => {

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

    props.getButtons(buttons);
    function navToggleOn()
    {
        document.getElementById('overlay').style.left='0%';
    }

    function navToggleOff()
    {
        document.getElementById('overlay').style.left='-100%';
    }

    
    
    return (
        <>

        <div className='HeaderShow'>
        <img src={logo}/>
            <a className='HeaderShow__left'>
                
                THE MARKET
            </a>
            <div onClick={navToggleOn} className='HeaderShow__right'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        <div className="HeaderFull" id="overlay">
            
            <div onClick={navToggleOff} className='overlay__button'>
            <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            
            <div className='HeaderFull__overlay'>
                <Button toggleOff={navToggleOff} buttons={buttons}/>
                <SubMenu/>
            </div>

        </div>
        </>
    )
}

export default HeaderFull
