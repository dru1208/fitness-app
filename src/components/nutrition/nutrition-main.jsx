import React, { Component } from "react";
import axios from 'axios'
import NutritionInput from "./nutrition-input.jsx"
import ImageUpload from "./nutrition-upload-image.jsx"

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
      currentUser: this.props.name,
      userID: this.props.userID,
      nutrition: daily_nutrition_stringed
    };
  }


  _submitNutritionHandler = (e) => {

    e.preventDefault();
    const formInput = e.target.elements
    const inputDate = formInput.date.value.split('-')
    let datetime;
    const findDatetime = (date, hour) => {
      return new Date(Number(date[0]), Number(date[1]), Number(date[2]), hour)
    }
    switch (formInput.mealTime.value) {
      case "breakfast":
        datetime = findDatetime(inputDate, 7);
        break;
      case "lunch":
        datetime = findDatetime(inputDate, 12);
        break;
      case "dinner":
        datetime = findDatetime(inputDate, 18);
        break;
    }
    console.log(datetime)
    axios.post('http://localhost:3000/api/user_nutritions', {
      user_id: this.props.userID,
      calories: formInput.calories.value ? formInput.calories.value : 0,
      protein: formInput.protein.value ? formInput.protein.value : 0,
      fat: formInput.fat.value ? formInput.fat.value : 0,
      carbohydrates: formInput.carbohydrates.value ? formInput.carbohydrates.value : 0,
      sodium: formInput.sodium.value ? formInput.sodium.value : 0,
      cholesterol: formInput.cholesterol.value ? formInput.cholesterol.value : 0,
      serving_size: formInput.servingSize.value ? formInput.servingSize.value : 1,
      datetime: datetime,
      meal_query: formInput.mealType.value ? formInput.mealType.value : ""
    })
    .then((response) => {
      this.setState({nutrition: response.data})
    })
  }



  render() {
    return (
      <main className="nutrition-page">
        <h1>Nutrition page</h1>
        <div className="watson">
        This is where watson api will go.
        </div>
        <NutritionInput userID={this.state.userID} submitNutritionHandle={this._submitNutritionHandler}/>
        <ImageUpload/>
      </main>
    );
  }
}