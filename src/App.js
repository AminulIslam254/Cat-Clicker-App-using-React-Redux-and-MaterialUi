import React, { Component } from 'react'
import Home from './components/Home.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     
      
      </BrowserRouter>
      </>
      
    )
  }
}
