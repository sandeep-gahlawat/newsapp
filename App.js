// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';

export class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <div className="container">

       <News/>
       </div>

      </div>
    )
  }
}




export default App;