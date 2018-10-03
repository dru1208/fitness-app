import React from 'react'
import { Chart } from "react-google-charts";

const NutritionChart = (props) => {
          <div className="dashboardCharts">
            <Chart
              chartType="PieChart"
              data={[
                ["Nutrition", "Calories"],
                ["Protein", props.protein * 4],
                ["Fat", props.fat * 9],
                ["Carbohydrates", props.carbohydrates * 4]
                // ["Cholesterol", this.state.nutrition.cholesterol],
                // ["Sugar", this.state.nutrition.sugar],
                // ["Sodium", this.state.nutrition.sodium]
              ]}
              options={props.pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"400px"}
              legend_toggle
            />
            <h4>Total calories: {props.calories}</h4>
          </div>
}

export default NutritionChart;