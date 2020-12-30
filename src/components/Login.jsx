import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>Writevibe</h1>
        </div>
        <div>
          <h3>Login</h3>
          <form>
            <label>Username</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleChangeEvents} />
            <label>Password</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" value="Log In" data-test="submit" />
          </form>
        </div>
      </div>
    )
  }
}