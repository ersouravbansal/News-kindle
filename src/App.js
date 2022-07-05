import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  x='sourav';
  render() {
    return (
      <div>
        Hello My First class Based Component. {this.x}
      </div>
    )
  }
}
