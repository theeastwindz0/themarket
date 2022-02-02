import React from "react";
import Plot from "react-plotly.js";
const Chart = (props) => {

  const price=(+props.data.close[0]).toFixed(2);
  const change=((props.data.close[0]-props.data.close[1])/100).toFixed(2);

  
  return (
    <React.Fragment>
      <Plot
        data={[
          {
            x: props.data.date,
            y: props.data.open,
            type: "scatter",
            mode: "lines",
            marker: { color: "red" },
            name: `OPEN`,
          },
          {
            x: props.data.date,
            y: props.data.close,
            type: "scatter",
            mode: "lines",
            marker: { color: "green" },
            name: `CLOSE`,
          }
        ]}
        layout={{
          title: ` ${props.stock.toUpperCase()} ${price} (${change}%)`,
          autosize:true,
        }}
        style={{width: "90%", height: "100%"}}

        
      
      />
    </React.Fragment>
  );
};

export default Chart;
