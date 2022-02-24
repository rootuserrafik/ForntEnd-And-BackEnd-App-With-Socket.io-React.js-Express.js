import React, { Component } from 'react';
import io from 'socket.io-client';

export default class App extends Component {
  componentDidMount(){
    const socket = io.connect('/')
  }


  render() {
    return (
      <div>
        <h1>React side work..!</h1>
      </div>
    )
  }
}
