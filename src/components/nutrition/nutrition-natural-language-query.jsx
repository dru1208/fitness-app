import React, { Component } from 'react';

const NutritionQuery = (props) => {

  return(
    <div>
      <form onSubmit={props.handleQuerySubmit}>
        <textarea name="query" />
        <input name="datetime" type="datetime-local" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default NutritionQuery;