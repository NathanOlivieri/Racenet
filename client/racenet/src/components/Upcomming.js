import React, { Component } from 'react'
import '../styles/upComming.scss'
import arrowIcon from '../iconArrowright.svg';
import EventcardMd from '../components/EventCardMd';

export default class Upcomming extends Component {
  render() {
    return (
      <div className="up">
        <h2>UPCOMING RACES</h2>
        <img src={ arrowIcon } alt="navigate to upcomming events for current user" className="up__icon"/>
        <div className="up__eventsList">
        <EventcardMd name={this.props.name}
            type={this.props.type} 
            month={this.props.month} 
            day={this.props.day} 
            attending={this.props.attending} 
            id={this.props.id} 
            key={this.props.key} />        
        </div>
      </div>
    )
  }
}
