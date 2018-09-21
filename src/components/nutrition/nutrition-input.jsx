import React, { Component } from "react";

export default class Input extends Component {

  render() {
    return (
      <main className="events">
      <h2>Enter daily nutritional data</h2>
      <table className="inputboxes" style={{ width: '100%' }}>
      <thead>
      <tr>
        <td>Calories</td><td><input type="textbox" /></td>
      </tr>
      <tr>
        <td>Proteins (g)</td><td><input type="textbox" /></td>
      </tr>
      <tr>
        <td>Fats (g)</td><td><input type="textbox" /></td>
      </tr>
       <tr>
        <td>Carbohydrates (g)</td><td><input type="textbox" /></td>
      </tr>
      </thead>
      </table>
      <button type="button">Submit</button>
      </main>
    )
  }
}
