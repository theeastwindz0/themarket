import '../CSS/SubMenu.css'
import { useState } from 'react';
const SubMenu = () => {

    const [modeTitle,setModeTitle]=useState('Light Mode');

    function CheckboxButton(event)
    {
        if(event.target.checked)
        {
            document.getElementById("root").style.backgroundColor='black';
            document.getElementById("root").style.color='white';
            setModeTitle('Dark Mode');
        }
        else
        {
            document.getElementById("root").style.backgroundColor='white';
            document.getElementById("root").style.color='black';
            setModeTitle('Light Mode');
        }
            
    }
    return (
        <div className="SubMenu">
            <div className='SubMenu__text'>{modeTitle}</div>
            <div>
            <label className='switch'>
                <input type='checkbox' onClick={CheckboxButton}/>
                <span className='slider round'></span>
            </label>
            </div>
        </div>
    )
}

export default SubMenu

