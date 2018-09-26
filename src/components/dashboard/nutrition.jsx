import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class Nutrition extends Component {

  render() {
    const nutrition = this.props.nutrition;
    const pieOptions = {
      title: "",
      pieHole: 0.6,
      slices: [
        {
          color: "#2BB673"
        },
        {
          color: "#d91e48"
        },
        {
          color: "#007fad"
        },
        {
          color: "#e9a227"
        }
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "233238",
          fontSize: 14
        }
      },
      tooltip: {
        showColorCode: true
      },
      chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%"
      },
      fontName: "Roboto"
    };

    return (
      <main className="nutrition">
        <h1>Nutrition</h1>

        <Chart
          chartType="PieChart"
          data={[["Nutrition", "Grams"], ["Protein", nutrition.protein], ["Fat", nutrition.fat], ["Carbohydrates", nutrition.carbohydrates]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </main>
    )
  }
}
