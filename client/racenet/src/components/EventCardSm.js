import React, { Component } from 'react'
import '../styles/eventCardSm.scss'
import moment from 'moment';
import medal from '../medal3.svg';
import { Link } from 'react-router-dom';

export default class EventCardSm extends Component {
  render() {
    let eid = this.props.id
    let edate = this.props.eventDate
    let mmddyyyy = moment(edate).format('MMMM Do YYYY');
    return (
      <Link to={"/events/" + eid} title={eid} style={{ textDecoration: 'none' }}>
      <div className="eCardSm">
      <div className="eCardSm--overlay"></div>
        <h3>{this.props.name}</h3>
        <p>{mmddyyyy}</p>
        <img src={medal} alt="medalIcon"></img>
      </div>
      </Link>
    )
  }
}
