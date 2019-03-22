import React, { Component } from 'react';
import '../styles/home.scss';
import logo from '../logo.PNG';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__logo">
          <img className="home__logo__img" src={ logo } alt="logo"/>
        </div>
        <div className="home__uname">
          <input type="text" className="home__uname__input" placeholder="Username"/>
        </div>
        <div className="home__pw">
          <input type="text" className="home__pw__input" placeholder="Password"/>
        </div>
        <Link to={"/Profile/5c946117ea9c0137944de24b"} style={{ textDecoration: 'none' }}>
        <div className="home__btn">
          <button className="home__btn__input" placeholder="Login">
            <p>Login</p>
          </button>
        </div>
        </Link>
      </div>
    )
  }
}
