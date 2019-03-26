import React, { Component } from 'react'
import '../styles/eventsPage.scss';
import navicon from '../eventListIcon.svg';
import DatePicker from "react-datepicker";
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {Link} from 'react-router-dom';
import AddEventConfirm from './AddEventConfirm';


export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      eventData: {},
      showModal: false
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
 window.scroll(0,0);
 this.setState({showModal:true})
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
    let modalConfirm;
    if(this.state.showModal){
      modalConfirm = <AddEventConfirm />
    }
    return (
      <div className="addEvent">
      { modalConfirm }
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
                    <input required placeholder="Enter Event Name" className="forminput" type="text" name="eventName"/>
                </div>
                <div className="dateCont">
                <div className="dateCont--overlay"></div>
                    <p>Event Date</p>
                    <DatePicker selected={this.state.startDate}
                                onChange={this.handleChange}/>
                </div>
                <div className="formCont">
                <div className="formCont--overlay2"></div>
                    <label className="formlabel" for="eventType">Event Type</label>
                    <input required placeholder="Enter Event Type" className="forminput" type="text" name="eventType"/>
                </div>
                <div className="formCont">
                <div className="formCont--overlay3"></div>
                    <label className="formlabel" for="eventCity">City</label>
                    <input required placeholder="Enter City" className="forminput" type="text" name="eventCity"/>
                </div>
                <div className="formCont">
                <div className="formCont--overlay4"></div>
                    <label className="formlabel" for="eventVenue">Venue</label>
                    <input required placeholder="Enter Event Venue" className="forminput" type="text" name="eventVenue"/>
                </div>
                <div className="formCont">
                <div className="formCont--overlay5"></div>
                    <label className="formlabel" for="eventContact">Contact</label>
                    <input required placeholder="Enter Email or Phone" className="forminput" type="text" name="eventContact"/>
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
