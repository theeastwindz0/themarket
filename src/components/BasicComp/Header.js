import logoImage from '../../images/themarket.png'
import '../CSS/Header.css'
import Button from './Button'
const Header = () => {

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
    }
]

    //Function Call to life state up 
    // props.passLocation(buttons);

    return (
        <div className="Header">
            <img src={logoImage}></img>
            <a className='header__logo'>THE MARKET</a>
            
            <div className='header__right'>
            <Button buttons={buttons}/>                
            </div>
        </div>
    )
}

export default Header
