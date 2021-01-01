import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      currentUser: ''
    };
    this.attemptLogin = this.attemptLogin.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  attemptLogin(e) {
    axios({
      method: 'get',
      url: '/api/users/',
      params: {
        email: this.state.username,
        password: this.state.password
      }
    })
    .then((res) => {
      this.setState({currentUser: res.data.username});
      console.log(res);
      console.log('successfully logged in');
    }, (err) => {
      console.log(err);
    })
    e.preventDefault();
  }

  handleUserChange(e) {
    this.setState({username: e.target.value});
    console.log(this.state.username);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Writevibe</h1>
          <p>Logged in as {this.state.currentUser}</p>
        </div>
        <div>
          <h3>Login</h3>
          <form onSubmit={this.attemptLogin}>
            <label>Username</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
            <label>Password</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" value="Log In" data-test="submit" />
          </form>
        </div>
      </div>
    )
  }
}