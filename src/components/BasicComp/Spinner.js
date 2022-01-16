import styled from "styled-components"

const Loader=styled.div`
        height:${props=>props.size};
        width: ${props=>props.size};

        margin:auto;
        margin-top:10px;
        border:8px solid white;
        border-top: 8px solid ${props=>props.wheelColor};
        border-radius: 50%;
    
        animation: spin 2s linear infinite;
    
    @keyframes spin{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }`

const Spinner = (props) => {
    return (
        <Loader size={props.size} wheelColor={props.wheelColor} >
            
        </Loader>
    )
}

export default Spinner
