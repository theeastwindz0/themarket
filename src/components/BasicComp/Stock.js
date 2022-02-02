import React, { useEffect ,useState} from "react";
import Chart from "./Chart";

const Stock = (props) => {

  const [stockData,SetStockData]=useState({
    open:[],
    close:[],
    date:[]
  })
  useEffect(() => {
    fetchStock(); 
   
  }, [props.stock]);
  
  const fetchStock = async () => {
    const API_KEY = "JLF1HFB2T3XYFYZ5";
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.stock}&apikey=${API_KEY}`
    );

    const data = await response.json();
    const openValues=[];
    const closeValues=[];
    const dateValues=[]
    for(var x in data['Time Series (Daily)'])
    {
      openValues.push(data['Time Series (Daily)'][x]['1. open'])
      closeValues.push(data['Time Series (Daily)'][x]['4. close'])
      dateValues.push(x)
    }

    SetStockData({
      open:openValues,
      close:closeValues,
      date:dateValues
    })

  };


  return(
    <React.Fragment>
      <Chart stock={props.stock} data={stockData}/>
    </React.Fragment>
  )
};

export default React.memo(Stock);
