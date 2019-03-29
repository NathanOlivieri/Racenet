import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/eventsPage.scss';
import addicon from '../add-icon.svg';
import '../add-icon-gradient.svg';
import EventCardLg from './EventCardLg';
import axios from 'axios';
import AOS from 'aos';
import personIcon from '../person-icon.svg';
import { Spring } from 'react-spring/renderprops'

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
      let eventsNum = eventsArray.length
      let eventsMap = eventsArray.map((object) => {
        return <EventCardLg title={object.name}
                            type={object.eventType}
                            date={object.eventDate}
                            location={object.location.venue}
                            attend={object.attending.length}
                            id={object._id}
                            key={object.id} />
      })
    return (
      <Spring
          from={{ opacity:0, marginTop: -500  }}
          to={{ opacity:1, marginTop:0 }}
          config={{ duration: 550 }}
      >
      { props => (
        <div style={props}>
          <div className="eventsPage">
          <div className="eventsPage__header">
          <div className="eventsPage__header--overlay"></div>
          <div className="eventsPage__flex">
              <h1>ALL EVENTS</h1>
              <h1>{`(${ eventsNum })`}</h1>
          </div>
              <Link to={"/Profile/5c9afa1d5c8996465c4e8486"} style={{ textDecoration: 'none' }}>
              <img src={ personIcon } 
                  className="eventsPage__header__img"
                  alt="navigate to all event lists"/></Link>
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
      </div>
      )}
      </Spring>
    )
  }
}
