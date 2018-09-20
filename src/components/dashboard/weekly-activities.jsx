import React, { Component } from "react";

export default class Activities extends Component {

  render() {
    const weekly = JSON.parse(this.props.weekly);
    return (
      <main class="weeklyActivies">
        <div class="sun">sun: {weekly.sun}</div>
        <div class="mon">mon: {weekly.mon}</div>
        <div class="tues">tues: {weekly.tues}</div>
        <div class="wed">wed: {weekly.wed}</div>
        <div class="thurs">thurs: {weekly.thurs}</div>
        <div class="fri">fri: {weekly.fri}</div>
        <div class="sat">sat: {weekly.sat}</div>
      </main>
    )
  }
}

