import React from 'react'
import RecentList from './recent-list.jsx'


const user = {first_name: "andrew"}

const Recent = (props) => {
  return(
    <main>
      <h2> Recent </h2>
      <RecentList />
    </main>
  )
}

export default Recent;