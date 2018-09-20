import React, { Component } from "react";

export default class Nutrition extends Component {

  render() {
    const nutrition = JSON.parse(this.props.nutrition);
    return (
      <main class="nutrition">
        <div class="protein">protein: {nutrition.protein}</div>
        <div class="fat">fat: {nutrition.fat}</div>
        <div class="carbohydrates">carbohydrates: {nutrition.carbohydrates}</div>
      </main>
    )
  }
}
