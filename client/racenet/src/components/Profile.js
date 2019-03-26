import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/profiles.scss';
import navicon from '../viewList-icon.svg';
import medal from '../medal2.svg';
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
      pastArray: [],
      futureArray: [],
      userGolds: 1,
      userSilvers: 1,
      userBronzes: 2,
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
        // console.log(this.state.userEvents)
      })
      .catch((err) => {
        console.log(err)
      })

      // if (response) {

      // }
//DOES NOT WORK YET
      //maybe put in render instead//
      // let allArray = this.state.userEvents
      // allArray.forEach((time) => {
      //   let eventDate = moment(time.eventDate).format('MMMM Do YYYY')
      //   let today = moment().format("MMMM Do YYYY")
      //   let pasArray = []
      //   let futureArray = []
      //   if( eventDate >= today ) {
      //     futureArray.push(time)
      //   }else{
      //     pasArray.push(time)
      //   }
      // console.log(pasArray)
      // console.log(futureArray)
      // })
  }

  
  render() {

  // console.log(allArray)
    // console.log(today._d)
   
    let upcomingObjs
    let upcomingArray = this.state.userEvents
            upcomingObjs = upcomingArray.map((object) => {
            return <Upcomming name={object.name}
            type={object.eventType} 
            eventDate={object.eventDate}
            attend={object.attending.length}
            ePics={object.pictures}  
            id={object._id} 
            key={object.id} />
          })          
    return (
      <div className="profile">
      <nav className="profile__nav">
      <div className="profile__nav--overlay"></div>
      <Link to={"/events"} style={{ textDecoration: 'none' }}>
        <img className="profile__nav__icon" alt="meaningfulpicture" src={ navicon } 
        alt="navigate to all event lists"/>
        <img className="profile__nav__logo" alt="meaningfulpicture" src={ logo }></img>
      </Link>
      </nav>
        <div className={this.setBGcolor() || "proDefault"}>
            <img className="profile__hero__pp" alt="meaningfulpicture" src={ profilePic } alt="user Profile Pic"/>
            <h1 className="profile__hero__h1">{this.state.userData.name}</h1>
            <img src={ medal } alt="medalicon" className="profile__hero__medal"/>
            <img className="profile__nav__logo" alt="meaningfulpicture" src={ logo }></img>
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
