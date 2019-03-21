import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/eventsPage.scss';
import navicon from '../eventListIcon.svg';
import addicon from '../add-icon.svg';
import '../add-icon-gradient.svg';
import EventCardLg from './EventCardLg';
import axios from 'axios';
import AOS from 'aos';



export default class EventsPage extends Component {
    constructor() {
        super();
        this.state = {
          eventsData: [],
        }
      }

      componentDidMount() {
        AOS.init();

        let geteventsConfig = {
          method: 'GET',
          url: `http://localhost:8080/events`
        }
        axios(geteventsConfig)
          .then((res) => {
            this.setState({
              eventsData: res.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

  render() {
      let eventsArray = this.state.eventsData
      let eventsMap = eventsArray.map((object) => {
        return <EventCardLg title={object.name}
                            type={object.eventType}
                            month={object.eventMonth}
                            day={object.eventDay}
                            location={object.location.venue}
                            attend={object.attending.length}
                            id={object._id}
                            key={object.id} />
      })
    return (
      <div className="eventsPage">
        <div className="eventsPage__header">
        <div className="eventsPage__header--overlay"></div>
            <h1>ALL EVENTS</h1>
            <img src={ navicon } 
                 className="eventsPage__header__img"
                 alt="navigate to all event lists"/>
            <div className="eventsPage__header__seperator"></div>
            <h3>RACEnet</h3>
        </div>
        <div className="eventsPage__list">
            { eventsMap }
        </div>
        <Link to={"/addnew"} style={{ textDecoration: 'none' }}>
        <div className="motionModal">
          <img src={ addicon } className="addIcon" alt="add new event"/>
        </div>
        </Link>
      </div>
    )
  }
}
