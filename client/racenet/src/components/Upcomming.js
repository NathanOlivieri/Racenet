import React, { Component } from 'react'
import '../styles/upComming.scss'
import arrowIcon from '../iconArrowright.svg';
import EventcardMd from '../components/EventCardMd';
import moment from 'moment';

export default class Upcomming extends Component {

  

  render() {
    let edate = this.props.eventDate
    let mmddyyyy = moment(edate).format('MMMM Do YYYY');
    return (
      <div className="up">
        <h2>UPCOMING RACES</h2>
        <img src={ arrowIcon } alt="navigate to upcomming events for current user" className="up__icon"/>
        <div className="up__eventsList">
        <EventcardMd name={this.props.name}
            type={this.props.type} 
            eventDate={ mmddyyyy }
            attending={this.props.attend} 
            id={this.props.id} 
            key={this.props.key} />        
        </div>
      </div>
    )
  }
}
