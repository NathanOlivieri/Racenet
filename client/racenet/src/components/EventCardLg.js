import React, { Component } from 'react';
import '../styles/eventCardLg.scss';
import personIcon from '../person-icon.svg';
import addIcon from '../person-add-icon.svg';
import { Link } from 'react-router-dom';
import moment from 'moment'

export default class EventCardLg extends Component {
  render() {
    let eid = this.props.id
    let edate = this.props.date
    let mmddyyyy = moment(edate).format('MMMM Do YYYY');
    let strArr = mmddyyyy.split(" ")
    let eObject = {
      month:strArr[0],
      day:strArr[1],
      year:strArr[2]
    }

    console.log(strArr)
    return (        
    <Link to={"/events/" + eid} title={eid} style={{ textDecoration: 'none' }}>
      <div className="eCardLg" data-aos="fade-left">
        <div className="eCardLg--overlay"></div>

        <div className="eCardLg__left">
            <p>{eObject.month}</p>
            <div className="eCardLg__left__seperator"></div>
            <h5>{eObject.day}</h5>
        </div>
        <div className="eCardLg__right">
            <p className="eCardLg__right__title">{this.props.title}</p>
            <p className="eCardLg__right__type">{this.props.type}</p>
            <p className="eCardLg__right__location">{this.props.location}</p>
            <div className="flexr">
                <img className="eCardLg__right__icon" src={ personIcon } alt="attending"/>
                <p className="eCardLg__right__attending">{ this.props.attend }</p>
                <img className="eCardLg__right__addicon" src={ addIcon } alt="click to join this event"/>
            </div>
        </div>
      </div>
    </Link>
    )
  }
}
