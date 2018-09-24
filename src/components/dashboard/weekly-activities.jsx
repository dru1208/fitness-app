import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class Activities extends Component {

  render() {
    const weekly = JSON.parse(this.props.weekly);
    return (
      <main className="weekly_activities">
      <h1>Weekly Activities</h1>

        <div className={"activities_chart"}>
        <Chart
          chartType="ColumnChart"
          rows={[
            ["Sunday", weekly.sun],
            ["Monday", weekly.mon],
            ["Tuesday", weekly.tues],
            ["Wednesday", weekly.wed],
            ["Thursday", weekly.thurs],
            ["Friday", weekly.fri],
            ["Saturday", weekly.sat]
          ]}
          columns={[
            {
              type: "string",
              label: "Day"
            },
            {
              type: "number",
              label: "Time Spent Exercising"
            }
          ]}
          options={
            // Chart options
            {
              animation:{
                startup: true,
                duration: 1000,
                easing: 'out'
              },
              hAxis: {
                title: "Days",
                viewWindow: { min: 0, max: 7 }
              },
              vAxis: { title: "Time Spent (minutes)", viewWindow: { min: 0 } },
              legend: "none"
            }
          }
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
       <label htmlFor="add activity">Add how many minutes for your today's excercise:</label>
        <input type="email" name="email"></input>
      </main>

    )
  }
}

