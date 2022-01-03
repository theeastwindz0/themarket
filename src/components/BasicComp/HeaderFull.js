import '../CSS/HeaderFull.css'
import Button from './Button'

const HeaderFull = () => {

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

    return (
        <>
        <div className="HeaderFull" id="overlay">

            <div className='HeaderFull__overlay'>
                <Button buttons={buttons}/>
            </div>

        </div>
        </>
    )
}

export default HeaderFull
