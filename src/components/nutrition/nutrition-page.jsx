import React, { Component } from "react";
import NutritionInput from "./nutrition-input.jsx"

//HARDCODED DATABASE TABLES

const daily_nutrition = {
  user_id: 1,
  calories: 1500,
  protein: 80,
  fat: 100,
  carbohydrates: 250
}
const daily_nutrition_stringed = JSON.stringify(daily_nutrition)

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Vincent",
      nutrition: daily_nutrition_stringed
    };
  }

  render() {
    return (
      <main className="nutrition-page">
        <h1>Nutrition page</h1>
        <div className="watson">
        This is where watson api will go.
        </div>
        <NutritionInput/>
      </main>
    );
  }

}