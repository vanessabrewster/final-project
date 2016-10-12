import React, { Component } from 'react';
import TimerBody from './Components/TimerBody'
import List from './Components/List'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TimerBody />
        <List />
      </div>
    )
  }
}

export default App;
