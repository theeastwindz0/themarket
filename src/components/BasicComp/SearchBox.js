import { useState } from 'react/cjs/react.development'
import '../CSS/SearchBox.css'
const SearchBox = (props) => {
    const [search,setSearch]=useState('');
    const InputHandler=(event)=>
    {
        setSearch(event.target.value);
    }

    const onSubmitHandler=()=>
    {
        props.sendSearch(search);
    }
    return (
        <div className="SearchBox">
            <input onChange={InputHandler} type='search'></input>
            <button onClick={onSubmitHandler}>SEARCH</button>
        
        </div>
    )
}

export default SearchBox
