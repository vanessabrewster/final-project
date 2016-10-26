import React, { Component } from 'react';

export default class Header extends Component {

  renderUsername() {
    return <h2>{this.props.user.email}</h2>
  }

  renderLogOut() {
    return (
      <button onClick={() => this.props.onLogOut()}>Log Out</button>
    )
  }

  logIn() {
    let email = this.refs.email
    let pass = this.refs.pass

    this.props.onLogIn(email.value, pass.value)

    email.value = ""
    pass.value = ""
  }

  signUp() {
    let email = this.refs.email
    let pass = this.refs.pass

    this.props.onSignUp(email.value, pass.value)

    email.value = ''
    pass.value = ''
  }

  renderLogOut() {
    return (
      <button className="loginbutton" onClick={() => this.props.onLogOut()}>Log Out</button>
    )
  }



  render() {
    let user = this.props.user
    return (
      <div className="header">
        <div className="username">
          <h2><span className="usernamefont">{ user ? this.renderUsername() : null } Time Yo'Self</span></h2>
        </div>
        <div className="login">
          { user ? this.renderLogOut()
            : <div>
            <input type="email" ref="email" className = "loginbox"></input>
            <input type="password" ref="pass" className = "loginbox"></input>
            <button className="loginbutton" onClick={() => this.logIn()}>Log In</button>
              <button className="signupbutton" onClick={() => this.signUp()}>Sign Up</button>
            </div>
           }
        </div>
      </div>
    )
  }
}
