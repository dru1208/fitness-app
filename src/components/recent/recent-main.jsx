import React from 'react'
import RecentList from './recent-list.jsx'
import { css } from 'emotion'


const Recent = (props) => {
  return(
    <main className="feedPage">
      <h2 className="feedHeader"> Recent Feed </h2>
      <RecentList />
    </main>
  )
}

export default Recent;