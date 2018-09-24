import React from 'react'
import EventList from './event-list.jsx'
import EventForm from './event-form.jsx'


const user = {first_name: "andrew"}

const BlogMain = (props) => {
  return(
    <main>
      <EventForm />
      <EventList />
    </main>
  )
}

export default BlogMain;