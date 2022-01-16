import { useState } from "react";
import NewsFetcher from "../BasicComp/NewsFetcher"
import Parallex from "../BasicComp/Parallex";
import SearchBox from "../BasicComp/SearchBox"

const News = () => {
    
  
    const [searchKey,setSearchKey]=useState('nyse');
    const receiveSearch=(search)=>
    {
        if(search.trim().length>0)
        {
            setSearchKey(search);
        }
    }

    return (
        <>
        <SearchBox sendSearch={receiveSearch} />        
        <NewsFetcher searchKey={searchKey}/>
        </>
    )
}

export default News
