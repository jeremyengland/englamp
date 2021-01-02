import React from 'react';
import axios from 'axios';
import Home from './Home.jsx'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      currentUser: null,
      userId: null
    };
    this.attemptLogin = this.attemptLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  // sends request to db to verify
  attemptLogin(e) {
    axios({
      method: 'get',
      url: '/api/users/',
      params: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then((res) => {
        this.setState({
          currentUser: res.data.username,
          userId: res.data.id
        });
        console.log(res);
        if (res.data == "incorrect email/password combination") {
          alert("Incorrect email/password combination! 😥\nTry again please.")
        }
      }, (err) => {
        console.log(err);
      })
    e.preventDefault();
  }

  // logs current user out
  handleLogout(e) {
    this.setState({
      email: '',
      password: '',
      currentUser: null,
      userId: null
    })
  }

  // changes username stored in state
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }

  // changes password stored in state
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  }

  // renders login; after login, renders home page
  render() {
    return (
      <div>
        <div>
          <h1>Writevibe</h1>
        </div>
        {!this.state.currentUser &&
          <div>
            <h3>Login</h3>
            <form onSubmit={this.attemptLogin}>
              <label>Email</label>
              <input type="text" data-test="username" value={this.state.email} onChange={this.handleEmailChange} />
              <label>Password</label>
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
              <input type="submit" value="Log In" data-test="submit" />
            </form>
          </div>
        }
        {this.state.currentUser &&
          <div>
            <div>
              <form onSubmit={this.handleLogout}>
                <label>Welcome back @{this.state.currentUser}</label>
                <input type="submit" value="Log Out" data-test="submit" />
              </form>
            </div>
            <div>
              <Home userId={this.state.userId} currentUser={this.state.currentUser}></Home>
            </div>
          </div>
        }
      </div>
    )
  }
}