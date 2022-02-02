import React, { useState } from "react";
import Stock from "../BasicComp/Stock";
import styles from "../CSS/UStop.module.css";

const UStop = () => {
  const stockData = async (data) => {
    // console.log(data['Time Series (Daily)']);
    // const updatedValue = {"item1":"juice"};
    // setStockData1(prevData=>({
    //     ...prevData,
    //     ...updatedValue
    // }))
    // console.log(stockData1);
  };

  return (
    <React.Fragment>
      <div className={styles.Stocks_boxes}>
        <div className={styles.Stocks_box}>
          <Stock stock="aapl" sendData={stockData} />
        </div>
        <div className={styles.Stocks_box}>
          <Stock stock="msft" sendData={stockData} />
        </div>

        <div className={styles.Stocks_box}>
          <Stock stock="googl" sendData={stockData} />
        </div>

        <div className={styles.Stocks_box}>
          <Stock stock="amzn" sendData={stockData} />
        </div>

        <div className={styles.Stocks_box}>
          <Stock stock="tsla" sendData={stockData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UStop;
