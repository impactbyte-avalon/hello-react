import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo1" alt="logo" />
          <h1 className="App-title">Welcome to Hotel Habbo</h1>

        </header>

          <div className="Showcase">

              <div className="wrapper">
              <form action="home.html">
                <div className="loginForm">Login form</div>

                <div className="container">
                  <label><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <button type="submit">Login</button>
                  <input type="checkbox" checked="checked" /> Remember me
                </div>

                <div className="container" >
                  <button type="button" className="cancelbtn">Cancel</button>
                  <span className="psw"> <a href="Home">Forgot password?</a></span>
                </div>
              </form>
            </div>

          <p className="App-intro">
            To get started, Please login fisrt.
          </p>

          </div>
      </div>
    );
  }
}

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
//
// export default Home;

export default App;
