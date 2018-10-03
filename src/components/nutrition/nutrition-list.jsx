import React from 'react';
import NutritionRow from './nutrition-row.jsx'

const NutritionList = (props) => {
  const generateNutritionRow = props.nutritionList.map((entry, index) => {
    return <NutritionRow log={entry} key={index} />
  })

  return(
    <div className="nutritionTable border">
      <table>
        <thead>
          <tr className="tableHeaderRow">
            <th className="nutritionTableHeader">Calories</th>
            <th className="nutritionTableHeader">Protein (g)</th>
            <th className="nutritionTableHeader">Fat (g)</th>
            <th className="nutritionTableHeader">Carbohydrates (g)</th>
            <th className="nutritionTableHeader">Sugar (g)</th>
            <th className="nutritionTableHeader">Sodium (g)</th>
            <th className="nutritionTableHeader">Cholesterol (g)</th>
            <th className="nutritionTableHeader">Serving Size</th>
            <th className="nutritionTableHeader">Food Name</th>
            <th className="nutritionTableHeader">Entry Date</th>
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