import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TimerBody extends Component {
  render(){
    return (
      <div>
        <div>
          <h1> Project Name </h1>
        </div>
        <div>
          <h1>00:00:00</h1>
        </div>
        <div>
          <button>start/stop</button>
        </div>
      </div>
    )
  }
}
