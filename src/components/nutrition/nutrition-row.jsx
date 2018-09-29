import React from 'react';

const NutritionRow = (props) => {
  return(
    <tr>
      <td className="calories">{props.log.calories ? props.log.protein : '?'}</td>
      <td className="protein">{props.log.protein ? props.log.protein : '?'}</td>
      <td className="fat">{props.log.fat ? props.log.fat : '?'}</td>
      <td className="carbohydrates">{props.log.carbohydrates ? props.log.carbohydrates : '?'}</td>
      <td className="sugar">{props.log.sugar ? props.log.sugar : '?'}</td>
      <td className="sodium">{props.log.sodium ? props.log.sodium : '?'}</td>
      <td className="cholesterol">{props.log.cholesterol ? props.log.cholesterol : '?'}</td>
      <td className="servingSize">{props.log.serving_size ? props.log.serving_size : 1 }</td>
      <td className="foodName">{props.log.meal_query ? props.log.meal_query : "Fill in food next time!"}</td>
      <td className="entryDate">{props.log.datetime ? props.log.datetime.split("T")[0] : ""}</td>
    </tr>

  )
}

export default NutritionRow