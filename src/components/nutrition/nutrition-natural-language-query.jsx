import React, { Component } from 'react';
import { generateCurrentDateTime } from '../../_helper.jsx'

const NutritionQuery = (props) => {

  return(
    <div className="nutritionNatLang border">
      <h2>Natural Language Query</h2><br/>
      <form onSubmit={props.handleQuerySubmit}>
        <textarea className="nutritionNatLangTextarea" name="query" rows="6" columns="150"/><br />
        <input name="datetime" type="datetime-local" defaultValue={generateCurrentDateTime()} className="nutritionNatLangDatetime"/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default NutritionQuery;