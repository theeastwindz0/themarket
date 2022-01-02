import React from 'react'
import '../CSS/Article.css'
import sideview from '../../images/Container__0.jpg'
function Article(props) {
    const myStyle={
        
        
    }
    
    return (
        <>

        <div className='article__content'>
        <div className='article__title'>{props.dataToSend.articleHeading}</div>
        </div>
        <div className='article'>
            <div  className='article__container__box-1'>
                <img  src={props.dataToSend.articleImage}/>
            </div>
            <div className='article__container__box-2'>
                <h3>{props.dataToSend.title1}</h3>
                <p>{props.dataToSend.para1}</p>
                <h3>{props.dataToSend.title2}</h3>
                <p>{props.dataToSend.para2}</p>
                <h3>{props.dataToSend.title3}</h3>
                <p>{props.dataToSend.para3}</p>
                <h3>{props.dataToSend.title4}</h3>
                <p>{props.dataToSend.para4}</p>

                </div>
        </div>
        </>
    )
}

export default Article;
