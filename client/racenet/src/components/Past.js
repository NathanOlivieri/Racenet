import React, { Component } from 'react'
import '../styles/past.scss'
import arrowIcon from '../iconArrowright.svg';
import EventCardSm from './EventCardSm';


export default class Past extends Component {
  render() {
    let pastObjs
          let userEvents = this.props.userEvents
                  pastObjs = userEvents.map((object) => {
                  return <EventCardSm name={object.name}
                  type={object.eventType} 
                  month={object.eventMonth} 
                  day={object.eventDay} 
                  id={object._id} 
                  key={object.id} />
                })   
    return (
      <div className="pastEvents">
        <title className="title">
          <h2>PAST EVENTS/ RESULTS</h2>
          <img src={arrowIcon} alt="navigate to upcomming events for current user" className="pastEvents__icon" />
        </title>
        <div className="pastEvents__list">
        { pastObjs } 
        </div>
      </div>
    )
  }
}
