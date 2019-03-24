import React, { Component } from 'react'
import '../styles/eventsPage.scss';
import navicon from '../eventListIcon.svg';
import DatePicker from "react-datepicker";
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {Link} from 'react-router-dom';


export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      eventData: {}
    };
  }
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  submitHandler = (e) => { 
    const newEvent = {
    name: e.target.eventName.value,
    eventDate: this.state.startDate,
    eventType: e.target.eventType.value,
    eventContact: e.target.eventContact.value,
    location: {
     location: e.target.eventCity.value,
     venue: e.target.eventVenue.value,
   }
 }
//  console.log(JSON.stringify(newEvent))
 
//  let reqBody = JSON.stringify(newEvent)

 const eConfig = {
  method: 'POST',
  url: 'http://localhost:8080/events',
  data: JSON.stringify(newEvent),
  headers: {
    'content-type': 'application/json'
  }
}
axios(eConfig)
.then((rezult) => { 
  console.log(rezult.data)
  this.setState({
    eventData: rezult.data
  })
})
.catch((err) => {
  console.log(err)
})
e.preventDefault();
}

  render() {
    return (
      <div className="addEvent">
            <div className="eventsPage__header">
              <div className="eventsPage__header--overlay"></div>
            <h1>Add New Event</h1>
            <img src={ navicon } 
                 className="eventsPage__header__img"
                 alt="navigate to all event lists"/>
            <div className="eventsPage__header__seperator"></div>
            <h3>RACEnet</h3>
        </div>
        <div className="formdiv">
          <div className="formdiv__title">
            <p>ENTER NEW EVENT DETAILS:</p>
          </div>
            <form onSubmit={this.submitHandler} className="formdiv__form">
                <div className="formCont">
                  <div className="formCont--overlay"></div>
                    <label className="formlabel" for="eventName">Event Name</label>
                    <input placeholder="Enter Event Name" className="forminput" type="text" name="eventName"/>
                </div>
                <div className="dateCont">
                    <p>Event Date</p>
                    <DatePicker selected={this.state.startDate}
                                onChange={this.handleChange}/>
                </div>
                <div className="formCont">
                    <label className="formlabel" for="eventType">Event Type</label>
                    <input placeholder="Enter Event Type" className="forminput" type="text" name="eventType"/>
                </div>
                <div className="formCont">
                    <label className="formlabel" for="eventCity">City</label>
                    <input placeholder="Enter City" className="forminput" type="text" name="eventCity"/>
                </div>
                <div className="formCont">
                    <label className="formlabel" for="eventVenue">Venue</label>
                    <input placeholder="Enter Event Venue" className="forminput" type="text" name="eventVenue"/>
                </div>
                <div className="formCont">
                    <label className="formlabel" for="eventContact">Contact</label>
                    <input placeholder="Enter Email or Phone" className="forminput" type="text" name="eventContact"/>
                </div>
                <div className="formCont">
                     <button className="formbutton" type="text" name="formsub"><h2>SUBMIT</h2></button>
                </div>
                <Link to={"/events"} style={{ textDecoration: 'none' }}>
                  <div className="formCont">
                      <button className="formbutton2" type="text" name="formCancel"><h2>CANCEL</h2></button>
                  </div>
                </Link>
            </form>
        </div>
      </div>
    )
  }
}
