import React, { Component } from 'react'
import '../styles/eventsPage.scss';
import { Link } from 'react-router-dom';



export default class AddEventConfirm extends Component {
  render() {
    return (
      <div className="newEventModal">
        <p>Thank you for submiting a new Event!</p>
        <Link to={"/events"} style={{ textDecoration: 'none' }}>
        <button>VIEW ALL EVENTS</button>
        </Link>
        <Link to={"/addnew"} style={{ textDecoration: 'none' }}>
        <button>ADD MORE EVENTS</button>
        </Link>
      </div>
    )
  }
}
