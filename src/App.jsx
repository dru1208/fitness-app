import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationPage from './components/home-page/Register.jsx';
import LoginPage from './components/home-page/Login.jsx';
import BlogList from './components/blogs/BlogList.jsx';
import NewBlog from './components/blogs/BlogNew.jsx';
import BlogTitleBar from './components/blogs/BlogTitleBar.jsx';

export class App extends Component {

  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RegistrationPage />
        <LoginPage />
        <BlogTitleBar />
        <NewBlog />
        <BlogList />
      </div>
    );
  }

}





export default App;
