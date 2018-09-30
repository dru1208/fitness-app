import React, { Component } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
export default class Nutrition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.user_id,
      nutrition: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/dashboard_nutritions', {
      params: {
        user_id: this.state.user_id
      }
    })
    .then(response => {
      const data = response.data;
      this.setState({
        nutrition: {
          calories: data.calories,
          protein: data.protein,
          fat: data.fat,
          carbohydrates: data.carbohydrates,
          sugar: data.sugar,
          sodium: data.sodium,
          cholesterol: data.cholesterol
        }
      })
    })
  }

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
        },
        {
          color: "#7F3FBF"
        },
        {
          color: "#A5A5A5"
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

    if (this.state.nutrition) {
      return (
        <div className="dashboardNutrition">
          <h1>Nutrition</h1>

          <Chart
            chartType="PieChart"
            data={[
              ["Nutrition", "Grams"],
              ["Protein", this.state.nutrition.protein],
              ["Fat", this.state.nutrition.fat],
              ["Carbohydrates", this.state.nutrition.carbohydrates],
              ["Cholesterol", this.state.nutrition.cholesterol],
              ["Sugar", this.state.nutrition.sugar],
              ["Sodium", this.state.nutrition.sodium]
            ]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      )
    } else {
      return (
        <main className="dashboardNutrition">
          <h1>Fill out your past nutrition info!</h1>
        </main>
      )
    }
  }
}
