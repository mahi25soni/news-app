import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
// import <News></News>
import News from './Components/News';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<News pageSize={6} country="in" category="general"/>}></Route>
        <Route path='/business' element={<News pageSize={6} country="in" category="business"/>}></Route>
        <Route path='/entertainment' element={<News pageSize={6} country="in" category="entertainment"/>}></Route>
        <Route path='/health' element={<News pageSize={6} country="in" category="health"/>}></Route>
        <Route path='/science' element={<News pageSize={6} country="in" category="science"/>}></Route>
        <Route path='/sports' element={<News pageSize={6} country="in" category="sports"/>}></Route>
        <Route path='/technology' element={<News pageSize={6} country="in" category="sports"/>}></Route>
      </Routes>
      </BrowserRouter>

      </>

    )
  }
}


