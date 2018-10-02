import React, { Component } from "react";


const Input = (props) => {

  return (
    <main className="nutritionInput border">
      <h2>Enter  by Daily Nutritional Data:</h2>
      <form onSubmit={props.submitNutritionHandler}>
        <label htmlFor="calories">Calories: </label>
        <input type="textbox" name="calories" /><br />
        <label htmlFor="protein">Protein (g): </label>
        <input type="textbox" name="protein" /><br />
        <label htmlFor="fat">Fat (g): </label>
        <input type="textbox" name="fat" /><br />
        <label htmlFor="sodium">Sodium (g): </label>
        <input type="textbox" name="sodium" /><br />
        <label htmlFor="sodium">Carbohydrates (g): </label>
        <input type="textbox" name="carbohydrates" /><br />
        <label htmlFor="cholesterol" >Cholesterol (g): </label>
        <input type="textbox" name="cholesterol" /><br />
        <label htmlFor="servingSize">Serving Size: </label>
        <input type="textbox" name="servingSize" /><br />
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" /><br />
        <label htmlFor="mealTime">Meal Time </label>
        <select name="mealTime">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select><br />
        <label htmlFor="mealType">Food Name: </label>
        <input type="textbox" name="mealType" /><br />
        <input type="submit" value="Submit" /><br />
      </form>
    </main>
  )
}


export default Input;