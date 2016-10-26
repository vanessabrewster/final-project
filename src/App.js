import React, { Component } from 'react';
import Moment from 'moment'
import TimerBody from './Components/TimerBody'
import List from './Components/List'
import Header from './Components/Header'
import Footer from './Components/Footer'
import db from './db'
import './Reset.css';
import './App.css';
import _ from "lodash";
import auth from './auth'


let Timers = db.ref('timers')

class App extends Component {

  state = {
    projects : [],
       user: null,
  }

  addTimer(timer) {
    Timers.push(timer)
  }

  componentDidMount() {
    Timers.on('value', snapshot => {
      this.setState({
        projects: snapshot.val()
      })
    })

    auth.onAuthStateChanged(user => {
      this.setState({
        user: user
      })
    })

  }

  render() {
    return (
      <div>
          <Header
            onLogOut={() => auth.signOut()}
            onLogIn={(email, password) => auth.signInWithEmailAndPassword(email, password)}
            onSignUp={auth.createUserWithEmailAndPassword}
            user={this.state.user}
          />
          <TimerBody
          onNewTimer={timer => this.addTimer(timer)}
          user={this.state.user}
          />

          <List projects={this.state.projects}/>
      </div>
    )
  }
}

export default App;
