import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/eventPage.scss';
import navicon from '../iconArrowright.svg';
import personIcon from '../person-icon.svg';
import axios from 'axios';
import UserCard from './UserCard';



export default class EventPage extends Component {
    constructor(props) {
        super();
        this.state = {
          eventData: {},
          attendUsers: [],
          detailView: true,
          attendView: false,
          resultsView: false
        }
      }

    componentDidMount() {
        let eid = this.props.match.params.id
        let geteventConfig = {
          method: 'GET',
          url: `http://localhost:8080/events/${eid}`
        }
        axios(geteventConfig)
          .then((res) => {
            this.setState({
              eventData: res.data,
              eventAttend: res.data.attending.length,
              eventLoc: res.data.location.location,
              eventVen: res.data.location.venue,
              attendUsers: res.data.attending
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      toggleDetails = (e) => {
            this.setState({
                detailView:true,
                attendView:false,
                resultsView: false

            })
      }
      toggleResults = (e) => {
        this.setState({
            detailView:false,
            attendView:false,
            resultsView: true
        })
      }
      toggleAttend = (e) => {
            this.setState({
                detailView:false,
                attendView:true,
                resultsView: false
            })
      }
      

      addUsertoEvent = (e) => {
        let userID = this.props.userID
        let eventID = this.props.match.params.id
        const postUserConfig = {
          method: 'POST',
          url: `http://localhost:8080/events/${eventID}/addnew`,
          data: {userID},
          headers: {
            'content-type': 'application/json'
          }
        }
        axios(postUserConfig)
        .then((rezu) => { 
          console.log(rezu.data)
        })
        .catch((err) => {
          console.log(err)

        })
        
      }

  render() {
    
      let details;
      if(this.state.detailView){
          details =  <div className="eventPage__details">
          <h4 className="eventPage__details__label">DATE</h4>
          <h3 className="eventPage__details__info">{this.state.eventData.eventDate}</h3>

          <h4 className="eventPage__details__label">EVENT TYPE</h4>
          <h3 className="eventPage__details__info">{this.state.eventData.eventType}</h3>

          <h4 className="eventPage__details__label">LOCATION</h4>
          <h3 className="eventPage__details__info">{this.state.eventLoc}</h3>

          <h4 className="eventPage__details__label">VENUE</h4>
          <h3 className="eventPage__details__info">{this.state.eventVen}</h3>

          <h4 className="eventPage__details__label">CONTACT</h4>
          <h3 className="eventPage__details__info">{this.state.eventData.contact}</h3>
      </div>
      }
      
      let attendsMap;
      if(this.state.attendView){
          let attendArray = this.state.attendUsers
            attendsMap = attendArray.map((object) => {
            return <UserCard name={object.name} 
            golds={object.golds} 
            silvers={object.silvers} 
            bronzes={object.bronzes} 
            id={object._id} 
            key={object.id} />
          })        
      }

      let resultsMap;
      if(this.state.resultsView){
         resultsMap = <div className="eventPage__results">

         
         </div>   
      }


    return (
      <div className="eventPage">
        <div className="eventPage__header">         
            <div className="topnav">
                <h3>RACEnet Event</h3>
                <Link to={"/events"} style={{ textDecoration: 'none' }}>
                <img src={ navicon } 
                 className="eventPage__header__img"
                 alt="navigate to all event lists"/>
                </Link>
            </div>
            <img src={ personIcon } alt="attendingIcon" className="eventPage__header__icon"/>
            <p className="eventPage__header__attend">{this.state.eventAttend}</p>
            <div className="eventPage__header__seperator"></div>
            <h1 className="eventPage__header__name">{this.state.eventData.name}</h1>
            <nav className="eventPage__header__nav">
                <div onClick={this.toggleDetails} 
                    className={this.state.detailView ? "eventPage__header__nav__active" : "eventPage__header__nav__disabled"}>
                    <p>DETAILS</p>
                </div>
                <div onClick={this.toggleAttend} 
                    className={this.state.attendView ? "eventPage__header__nav__active" : "eventPage__header__nav__disabled"}>
                    <p>RACERS</p>
                </div>
                <div onClick={this.toggleResults} 
                    className={this.state.resultsView ? "eventPage__header__nav__active" : "eventPage__header__nav__disabled"}>
                    <p>RESULTS</p>
                </div>
            </nav>
        </div>
        { details }
        <div className="eventPage__attending">
            { attendsMap }
        </div>
        { resultsMap }
        <div onClick={this.addUsertoEvent} className={this.state.resultsView ? "hideme" : "eventPage__join"}>
          <p>JOIN EVENT</p>
        </div>
      </div>
    )
  }
}
