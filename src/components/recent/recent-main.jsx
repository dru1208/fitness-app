import React from 'react'
import RecentList from './recent-list.jsx'
import { css } from 'emotion'

const recentPage = css`
  padding: 0 8em;
`

const Recent = (props) => {
  return(
    <main className={recentPage}>
      <h2> Recent </h2>
      <RecentList />
    </main>
  )
}

export default Recent;