import React, { Component } from 'react'
import '../styles/eventCardMd.scss';
import userIcon from '../person-icon.svg';
import { Link } from 'react-router-dom';


export default class EventCardMd extends Component {
  render() {
    let eid = this.props.id
    return (
      <Link to={"/events/" + eid} title={eid} style={{ textDecoration: 'none' }}>

      <div className="eCard">
      <div className="eCard--overlay"></div>
        <h3>{this.props.name}</h3>
        <p>{this.props.eventDate}</p>
        <p>{this.props.type}</p>
        <div className="eCard__attending">
          <img src={ userIcon } alt="User-Icon"/>
          <p>{this.props.attending}</p>
        </div>
      </div>
      </Link>
    )
  }
}
