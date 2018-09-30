import React from 'react';

const NutritionRow = (props) => {
  return(
    <tr className="tableRow">
      <td className="calories tableCell">{props.log.calories ? props.log.calories : '?'}</td>
      <td className="protein tableCell">{props.log.protein ? props.log.protein : '?'}</td>
      <td className="fat tableCell">{props.log.fat ? props.log.fat : '?'}</td>
      <td className="carbohydrates tableCell">{props.log.carbohydrates ? props.log.carbohydrates : '?'}</td>
      <td className="sugar tableCell">{props.log.sugar ? props.log.sugar : '?'}</td>
      <td className="sodium tableCell">{props.log.sodium ? props.log.sodium : '?'}</td>
      <td className="cholesterol tableCell">{props.log.cholesterol ? props.log.cholesterol : '?'}</td>
      <td className="servingSize tableCell">{props.log.serving_size ? props.log.serving_size : 1 }</td>
      <td className="foodName tableCell">{props.log.meal_query ? props.log.meal_query : "Fill in food next time!"}</td>
      <td className="entryDate tableCell">{props.log.datetime ? props.log.datetime.split("T")[0] : ""}</td>
    </tr>

  )
}

export default NutritionRow