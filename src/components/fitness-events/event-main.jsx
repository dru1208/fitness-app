import React from 'react'
import EventList from './event-list.jsx'
import EventForm from './event-form.jsx'


const user = {first_name: "andrew"}

const BlogMain = (props) => {
  console.log('this.props', props)
  return(
    <main>

      <EventForm userID={props.userID}/>
      <EventList userID={props.userID} history={props.history}/>
    </main>
  )
}

export default BlogMain;