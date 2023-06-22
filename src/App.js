import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
// import <News></News>
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <News></News>
      </>

    )
  }
}


