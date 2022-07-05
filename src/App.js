import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';

export default class App extends Component {
  x='sourav';
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
}
