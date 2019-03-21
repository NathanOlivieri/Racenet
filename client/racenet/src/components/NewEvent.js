import React, { Component } from 'react'
import '../styles/eventsPage.scss';
import navicon from '../eventListIcon.svg';
import DateFindr from './DatePicker';


export default class NewEvent extends Component {

submitHandler = (e) => {
 const newEvent = {
   name: e.target.eventName.value,
   eventYear: 1,
   eventMonth: 1,
   eventDay: 1,
   eventType: e.target.eventType.value,
   eventCity: e.target.eventCity.value,
   eventVenue: e.target.eventVenue.value,
   eventContact: e.target.eventContact.value
 }
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
                    <DateFindr />
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
            </form>
        </div>
      </div>
    )
  }
}
