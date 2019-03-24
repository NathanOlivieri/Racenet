import React, { Component } from 'react'
import '../styles/eventCardSm.scss'
import moment from 'moment';

export default class EventCardSm extends Component {
  render() {
    let edate = this.props.eventDate
    let mmddyyyy = moment(edate).format('MMMM Do YYYY');
    return (
      <div className="eCardSm">
      <div className="eCardSm--overlay"></div>
        <h3>{this.props.name}</h3>
        <p>{mmddyyyy}</p>
        <h4>{this.props.abrev}</h4>
      </div>
    )
  }
}
