import React, { Component } from 'react';
import NewBlog from './BlogNew.jsx';

const BlogList = (props) => {
  return (
    <div>
      <h2>Blog List</h2>

        <br />
        <article className="container">
          <header>
          <img src="https://www.w3schools.com/images/lamp.jpg" />
          <h3>title here</h3>
          </header>
          <hr />
          <p>content should be here.</p>
          <footer>
          <div>icon like here</div>
          </footer>
        </article>
         <article className="container">
          <header>
          <img src="https://www.w3schools.com/images/lamp.jpg" />
          <h3>title here</h3>
          </header>
          <hr />
          <p>content should be here.</p>
          <footer>
          <div>icon like here</div>
          </footer>
        </article>
         <article className="container">
          <header>
          <img src="https://www.w3schools.com/images/lamp.jpg" />
          <h3>title here</h3>
          </header>
          <hr />
          <p>content should be here.</p>
          <footer>
          <div>icon like here</div>
          </footer>
        </article>
    </div>
  )
}





export default BlogList;