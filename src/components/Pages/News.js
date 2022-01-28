import { useState } from "react";
import NewsFetcher from "../BasicComp/NewsFetcher"
import SearchBox from "../BasicComp/SearchBox"

const News = () => {
    
  
    const [searchKey,setSearchKey]=useState('stocks');
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
