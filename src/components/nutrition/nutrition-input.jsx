import React, { Component } from "react";
import axios from "axios"

export default class Input extends Component {

  submitNutritionHandler = (e) => {

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
      const data = response.data;
      console.log(data);
    })
  }

  render() {
    return (
      <main className="events">
        <h2>Enter daily nutritional data</h2>
        <form onSubmit={this.submitNutritionHandler}>
          <label htmlFor="calories">Calories</label>
          <input type="textbox" name="calories" /><br />
          <label htmlFor="protein">Protein (g)</label>
          <input type="textbox" name="protein" /><br />
          <label htmlFor="fat">Fat (g)</label>
          <input type="textbox" name="fat" /><br />
          <label htmlFor="sodium">Sodium (g)</label>
          <input type="textbox" name="sodium" /><br />
          <label htmlFor="cholesterol" >Cholesterol (g)</label>
          <input type="textbox" name="cholesterol" /><br />
          <label htmlFor="servingSize">Serving Size</label>
          <input type="textbox" name="servingSize" /><br />
          <label htmlFor="date">Date</label>
          <input type="date" name="date" /><br />
          <label htmlFor="mealTime">Meal Time</label>
          <select name="mealTime">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select><br />
          <label htmlFor="mealType">Food Name</label>
          <input type="textbox" name="mealType" /><br />
          <input type="submit" value="Submit" /><br />
        </form>
      </main>
    )
  }
}
