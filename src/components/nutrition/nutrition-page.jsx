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
      nutrition: daily_nutrition_stringed,
      image: null
    };
    this.uploadButtonHandler = this.uploadButtonHandler.bind(this);
    this.selectImageHandler = this.selectImageHandler.bind(this);
  }

  uploadButtonHandler = (event) => {
    event.preventDefault();
    console.log(this.state.image);
  };

  //handles 'choose file' button
  selectImageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
          this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    //renders with image tag if a picture exists in the state
    if (this.state.image) {
      return (
        <main className="nutrition-page">
          <h1>Nutrition page</h1>
          <div className="watson">
          This is where watson api will go.
          </div>
          <NutritionInput/>
          <input type="file" onChange={this.selectImageHandler} name="pic" accept="image/*"/>
          <button type="button" onClick={this.uploadButtonHandler}>Upload</button>
          <p>Image preview:</p>
          <img class="image-preview" src={this.state.image} height="150px" width="auto"/>
        </main>
      );
    }
    return (
      <main className="nutrition-page">
        <h1>Nutrition page</h1>
        <div className="watson">
        This is where watson api will go.
        </div>
        <NutritionInput/>
        <input type="file" onChange={this.selectImageHandler} name="pic" accept="image/*"/>
        <button type="button" onClick={this.uploadButtonHandler}>Upload</button>
      </main>
    );
  }
}