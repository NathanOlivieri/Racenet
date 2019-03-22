import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/profiles.scss';
import navicon from '../eventListIcon.svg';
import profilePic from '../baseUserPic.jpg';
import logo from '../logo_transparent.png'
import Upcomming from '../components/Upcomming.js';
import Past from '../components/Past.js';
import Gallery from '../components/Gallery.js';
import Records from '../components/Records';
import axios from 'axios';
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      userPics: [],
      userEvents: [],
      userGolds: 1,
      userSilvers: 1,
      userBronzes: 1,
    }
  }

  setBGcolor = () => {
    let go = this.state.userGolds
    let si = this.state.userSilvers
    let br = this.state.userBronzes

    let bgGold = "proGold"
    let bgSil = "proSilver"
    let bgBronz = "proBronze"

    if (go >= si && go >= br) { return bgGold; }
    else if (si > go && si > br) { return bgSil; }
    else if (br > go && br > si) { return bgBronz; }
  }

  componentDidMount() {
    // getuserData();
    let uid = this.props.match.params.id
    let getuserConfig = {
      method: 'GET',
      url: `http://localhost:8080/users/${uid}`
    }
    axios(getuserConfig)
      .then((res) => {
        this.setState({
          userData:res.data,
          userPics:res.data.pictures,
          userEvents:res.data.events,
          userGolds: res.data.golds,
          userSilvers: res.data.silvers,
          userBronzes: res.data.bronzes,
        })
        console.log(this.state.userEvents)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {

    let upcomingObjs
    let upcomingArray = this.state.userEvents
            upcomingObjs = upcomingArray.map((object) => {
            return <Upcomming name={object.name}
            type={object.eventType} 
            month={object.eventMonth} 
            day={object.eventDay}
            attend={object.attending.length}  
            id={object._id} 
            key={object.id} />
          })          
    return (
      <div className="profile">
      <nav className="profile__nav">
      <div className="profile__nav--overlay"></div>
      <Link to={"/events"} style={{ textDecoration: 'none' }}>
        <img className="profile__nav__icon" src={ navicon } 
        alt="navigate to all event lists"/>
        <img className="profile__nav__logo" src={ logo }></img>
      </Link>
      </nav>
        <div className={this.setBGcolor()}>
            <img className="profile__hero__pp" src={ profilePic } alt="user Profile Pic"/>
            <h1 className="profile__hero__h1">{this.state.userData.name}</h1>
            <img className="profile__nav__logo" src={ logo }></img>
            <Records userData={this.state.userData}/>
        </div>

        <div className="profile__upcoming">
            { upcomingObjs }
        </div>
        <div className="profile__past">
            <Past userEvents={this.state.userEvents} />
            {/* this is now getting a list of objects insttead of ids */}
        </div>
        <div className="profile__gallery">
            <Gallery userPics={this.state.userPics}/>
        </div>
      </div>
    )
  }
}
