import React, { Component } from 'react';
import '../styles/home.scss';
import logo from '../logo.PNG';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__logo">
        <div className="home__logo--overlay"></div>
          <img className="home__logo__img" src={ logo } alt="logo"/>
        </div>

        {/* <div className="home__uname">
          <input type="text" className="home__uname__input" placeholder="Username"/>
        </div>
        <div className="home__pw">
          <input type="password" className="home__pw__input" placeholder="Password"/>
        </div> */}
        <Link to={"/Profile/5c9afa1d5c8996465c4e8486"} style={{ textDecoration: 'none' }}>
        <div className="home__btn">
          <button className="home__btn__input" placeholder="Login">
          <div className="home__btn__input--overlay"></div>
            <p>SIM USER 1</p>
          </button>
        </div>
        </Link>
        <Link to={"/Profile/5c9ae3ed6de6f729fc130290"} style={{ textDecoration: 'none' }}>
        <div className="home__btn">
          <button className="home__btn__input" placeholder="Login">
          <div className="home__btn__input--overlay2"></div>
            <p>SIM USER 2</p>
          </button>
        </div>
        </Link>
       <Link to={"/Profile/5c9ae5de6de6f729fc130291"} style={{ textDecoration: 'none' }}>
        <div className="home__btn">
          <button className="home__btn__input" placeholder="Login">
          <div className="home__btn__input--overlay3"></div>
            <p>SIM USER 3</p>
          </button>
        </div>
        </Link>
      </div>
    )
  }
}
