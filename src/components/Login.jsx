import React from 'react';
import axios from 'axios';
import Home from './Home.jsx'
import {
  TitleDiv,
  Title,
  Global,
  ContentDiv,
  InputBtn,
  InputForm,
  SignUp,
  UserHeader,
  UserProfilePic,
  HeaderOptions,
  LogoutBtn
} from '../styles/Styles.jsx';

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
    this.handleLogout = this.handleLogout.bind(this);
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
          userId: res.data.id,
          avatar: res.data.avatar
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
      <Global>
        <TitleDiv>
          <Title>writevibe</Title>
          {this.state.currentUser &&
          <UserHeader>
              <div>
                  <form>
                    <label>Welcome back @{this.state.currentUser}   </label>
                    <UserProfilePic src={this.state.avatar}></UserProfilePic>
                  </form>
              </div>
              <HeaderOptions>
                <LogoutBtn onClick={this.handleLogout}>Profile</LogoutBtn>
                <LogoutBtn onClick={this.handleLogout}>Logout</LogoutBtn>
              </HeaderOptions>
          </UserHeader>
          }
        </TitleDiv>
        {!this.state.currentUser &&
          <ContentDiv>
            <h3>Ready to write a masterpiece?</h3>
            <form onSubmit={this.attemptLogin}>
              <label>Email</label>
              <InputForm type="text" data-test="username" value={this.state.email} onChange={this.handleEmailChange} />
              <label>Password</label>
              <InputForm type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
              <InputBtn type="submit" value="Log In" data-test="submit" />
            </form>
            <SignUp>New to Writevibe? <a href="https://youtu.be/VKLKdVju9Nc">Sign Up!</a></SignUp>
          </ContentDiv>
        }
        {this.state.currentUser &&
          <div>
            <Home userId={this.state.userId} currentUser={this.state.currentUser}></Home>
          </div>
        }
      </Global>
    )
  }
}