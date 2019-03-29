import React, { Component } from 'react'
import '../styles/eventPage.scss';
import { Link } from 'react-router-dom';

export default class ResultConfirm extends Component {
  render() {
    return (
      <div className="resultModal">
        <h1>Results Submitted</h1>
        <Link to={"/events"} style={{ textDecoration: 'none' }}>
        <button className="resultModal__btn">OK</button>
        </Link>
      </div>
    )
  }
}
