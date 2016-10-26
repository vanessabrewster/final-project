import React, { Component } from 'react';
import Moment from 'moment';
import ReactDOM from 'react-dom';
import db from '../db'

let moment = require('moment');
let startTime = moment();

let Timers = db.ref('timers')

export default class TimerBody extends Component {

  state = {
    playingTime: false,
    projectName: false
  }

  playButton(e) {
    e.preventDefault()
    this.setState({
      startTime: moment(),
      playingTime: true
    })
  }

  stopButton(e) {
    e.preventDefault()
    this.setState({
      playingTime: false,
      projectName: false
    })

    let currentTime = moment()
    let difference = currentTime.diff(this.state.startTime)

    this.props.onNewTimer({
      startTime: this.state.startTime.toISOString(),
      projectName: this.state.projectName,
      difference: difference,
      endTime: currentTime.toISOString(),
      date: currentTime.format('DD.MM.YY'),
    })

  }

  inputName(e) {
    let projectName = this.refs.projectName.value

    this.setState({
      projectName: projectName
    })

  }

  render(){
    console.log('my state', this.state)
    return (
      <div className = "timer">
        <div className = "timerwrap">
          <div className = "timerprojectname">
            { this.state.projectName
              ? <h1>{ this.state.projectName }</h1>
              : <div className = "timerprojectname">
                <div className ="enterprojectname">
                  <h2>Enter Your Project Name</h2>
                  </div>
                  <input ref= "projectName" type="text" className="projectnameinput" />
                  <button className= "projectnameinputbutton" onClick={(e) => this.inputName(e)}>submit</button>
                </div>
            }
          </div>
          <div>
            { this.state.projectName
              ?  <div className = "ticker">
                    { this.state.playingTime ? <Ticker startTime={ this.state.startTime } /> : <p>00:00:00</p>}
                  </div>
              : <div className="hidden"></div>
            }
          </div>

          <div>
            { this.state.projectName
              ? <div>
              { this.state.playingTime
                ? <a href="/" className = "timerplaybutton" onClick={(e) => this.stopButton(e)}>II</a>
                : <a href="/" className = "timerplaybutton" onClick={(e) => this.playButton(e)}>&#9658;</a>
              }
              </div>
              : <div className="hidden"></div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export class Ticker extends Component {
  state = {
    display: "00:00:00"
  }

  tick(){
    let startTime = this.props.startTime
    let currentTime = moment()
    let difference = currentTime.diff(startTime)
    let duration = moment.duration(difference)
    let display = `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`

    this.setState({
        display: display
      }
    )
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return(
    <div>
      {this.state.display}
    </div>
    )
  }
}

//save current time
//save current time +1
//display difference of current time + 1 and current time

//start a timer save the time
//every second you get the current time and get the current time and the start time and get the difference
//trigger every second - set interval function that updates the state with the current time
