import React from 'react';
import NutritionRow from './nutrition-row.jsx'

const NutritionList = (props) => {
  const generateNutritionRow = props.nutritionList.map((entry, index) => {
    return <NutritionRow log={entry} key={index} />
  })

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protein (g)</th>
            <th>Fat (g)</th>
            <th>Carbohydrates (g)</th>
            <th>Sugar (g)</th>
            <th>Sodium (g)</th>
            <th>Cholesterol (g)</th>
            <th>Serving Size</th>
            <th>Food Name</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {generateNutritionRow}
        </tbody>
      </table>
    </div>
  )
}

export default NutritionList;