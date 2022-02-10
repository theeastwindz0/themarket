import React from "react";
import Plot from "react-plotly.js";
import styles from "../CSS/StockChart.module.css";
import '../CSS/idsStyling.css'

class StockChart extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartOpenValues: [],
      stockChartCloseValues: [],
      stockChartHighValues: [],
      stockChartLowValues: [],
      stockSymbol: props.stockSymbol,
      stockPrevSymbol: props.stockSymbol,
      stockSearch: "",
      stockSuggestions: [],
      stockName:[]
    };
  }

  componentDidMount() {
    this.searchStock();
    this.fetchStock();
  }
  searchStock() {
    const pointerToThis = this;
    const API_KEY2="WXUPJG9QX8T2KI8C";
    let API_CALL2 =
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
      this.state.searchStock +
      "&apikey= ${API_KEY2}";

    let suggestionsFunction = [];
    let namesFunction=[];
    fetch(API_CALL2)
      .then(function (response) {
        return response.json();
      })

      .then(function (data2) {
        for (var key in data2["bestMatches"]) {
          suggestionsFunction.push(
            data2["bestMatches"][key]["1. symbol"]);
            namesFunction.push(
              data2["bestMatches"][key]["2. name"]);
        }
        pointerToThis.setState({ 
          stockSuggestions: suggestionsFunction,
          stockName:namesFunction});
      });
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY="WXUPJG9QX8T2KI8C";
    let API_CALL =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
      this.state.stockSymbol +
      "&outputsize=compact&apikey= ${API_KEY}";

    let stockChartXValuesFunction = [];
    let stockChartCloseFunction = [];
    let stockChartOpenFunction = [];
    let stockChartLowFunction = [];
    let stockChartHighFunction = [];

    fetch(API_CALL)
      .then(function (response) {
        return response.json();
      })


      .then(function (data) {

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartCloseFunction.push(
            data["Time Series (Daily)"][key]["4. close"]
          );
          stockChartOpenFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
          stockChartHighFunction.push(
            data["Time Series (Daily)"][key]["2. high"]
          );
          stockChartLowFunction.push(
            data["Time Series (Daily)"][key]["3. low"]
          );
        }

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartCloseValues: stockChartCloseFunction,
          stockChartOpenValues: stockChartOpenFunction,
          stockChartLowValues: stockChartLowFunction,
          stockChartHighValues: stockChartHighFunction,
        });
      });
  }

  render() {
    const clickHandler = (suggestion) => {
      this.state.stockSymbol=suggestion;
      this.state.stockPrevSymbol = this.state.stockSymbol;
      this.fetchStock();
    };

    const stockChangeHandler = (event) => {
      const searchText = event.target.value;
      this.state.searchStock = searchText;
      this.state.stockSymbol = searchText;
      this.searchStock();
    };

    const onClickOverlayOnHandler = () => {
      document.getElementById("Stock_Chart_Overlay").style.display = "flex";
    };

    const onClickOverlayOffHandler = () => {
      document.getElementById("Stock_Chart_Overlay").style.display = "none";
    };

    let fontColor = "";
    let changeInPrice =
      this.state.stockChartCloseValues[0] - this.state.stockChartCloseValues[1];
    changeInPrice = (changeInPrice * 100) / this.state.stockChartCloseValues[1];
    changeInPrice = parseFloat(changeInPrice).toFixed(2);
    const stockPrice = parseFloat(this.state.stockChartCloseValues[0]).toFixed(
    );
    if (changeInPrice > 0) fontColor = "green";
    else fontColor = "red";

    return (
      <div className={styles.Stock__FullScreen}>
        <div className={styles.Stock__FullScreen__Header}>
          <p className={styles.Stock__FullScreen__Header__box} onClick={onClickOverlayOnHandler}>{this.state.stockPrevSymbol.toUpperCase()}</p>
          <p style={{ color: fontColor }}>
            {stockPrice} ({changeInPrice}%)
          </p>

        <div id='Stock_Chart_Overlay'>
          <div className={styles.overlay__box}>
            <h3>Symbol Search</h3>
            <div className={styles.overlay__box__header}>
              <button onClick={onClickOverlayOffHandler}>BACK</button>
              <input type="text" onChange={stockChangeHandler}></input>
            </div>
            <div className={styles.suggestions}>
              {this.state.stockSuggestions.map((suggestion, i) => (
                <div
                  className={styles.suggestion}
                  onClick={() => {
                    onClickOverlayOffHandler();
                    clickHandler(suggestion);
                  }}
                  key={i}>
                  {suggestion +" : "+ this.state.stockName[i]}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className={styles.Chart_Data}>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              open: this.state.stockChartOpenValues,
              high: this.state.stockChartHighValues,
              low: this.state.stockChartLowValues,
              close: this.state.stockChartCloseValues,

              increasing: { line: { color: "green" } },
              decreasing: { line: { color: "red" } },
              type: "candlestick",
              xaxis: "x",
              yaxis: "y",
            },
          ]}
          layout={{
            title: this.state.stockPrevSymbol.toUpperCase(),
            dragmode: "zoom",
            showlegend: false,
            xaxis: { title: "Date" },
            yaxis: { autorange: true },
          }}

          useResizeHandler={true}
          style={{width:'100%', height:'100%'}}
        />
      </div>
      </div>
    );
  }
}

export default StockChart;