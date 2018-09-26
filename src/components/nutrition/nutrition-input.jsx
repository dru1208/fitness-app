import React, { Component } from "react";
import axios from "axios"

export default class Input extends Component {

  submitNutritionHandler = (event) => {
    event.preventDefault();
    const calories = event.target.elements.Calories.value
    const protein = event.target.elements.Protein.value
    const fat = event.target.elements.Fat.value
    const carbohydrates = event.target.elements.Carbohydrates.value
    axios.post('http://localhost:3000/api/user_nutritions', {
      user_id: 3,
      calories: calories,
      protein: protein,
      fat: fat,
      carbohydrates: carbohydrates
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
  }

  render() {
    return (
      <main className="events">
      <h2>Enter daily nutritional data</h2>
      <table className="inputboxes" style={{ width: '100%' }}>
      <form onSubmit={this.submitNutritionHandler}>
        <thead>
        <tr>
          <td>Calories</td><td><input type="textbox" name="Calories" /></td>
        </tr>
        <tr>
          <td>Proteins (g)</td><td><input type="textbox" name="Protein" /></td>
        </tr>
        <tr>
          <td>Fats (g)</td><td><input type="textbox" name="Fat" /></td>
        </tr>
         <tr>
          <td>Carbohydrates (g)</td><td><input type="textbox" name="Carbohydrates" /></td>
        </tr>
        </thead>
        <input type="submit" value="Submit" />
      </form>
      </table>
      </main>
    )
  }
}
