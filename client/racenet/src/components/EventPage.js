import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/eventPage.scss';
import navicon from '../iconArrowright.svg';
import personIcon from '../person-icon.svg';
import medal from '../medal.svg';
import axios from 'axios';
import UserCard from './UserCard';
import UserResultCard from './UserResultCard';
import LaptimeAdder from './LaptimeAdder';
import AddtoEventConfirm from './AddtoEventConfirm'
import sort from 'fast-sort';
import Gallery from '../components/Gallery.js';
import moment from 'moment';
import { Spring, animated } from 'react-spring/renderprops'
import ResultConfirm from './ResultConfirm'


export default class EventPage extends Component {
    constructor(props) {
        super();
        this.state = {
          eventData: {},
          attendUsers: [],
          resultsData: [],
          eventPics: [],
          detailView: true,
          attendView: false,
          resultsView: false,
          showAddnew: false,
          addEventConfirm: false,
          resultsConfirm: false
        }
    }

    componentDidMount() {
      window.scroll(0,0);
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
              attendUsers: res.data.attending,
              eventPics: res.data.pictures
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      toggleDetails = (e) => {
        window.scroll(0,0);
            this.setState({
                detailView:true,
                attendView:false,
                resultsView: false

            })
      }
      toggleResults = (e) => {
        window.scroll(0,0);
        let id = this.props.match.params.id
        let getresults = {
          method: 'GET',
          url: `http://localhost:8080/events/${id}/results`
        }
        axios(getresults)
          .then((responce) => {
            this.setState({
              resultsData: responce.data,
              detailView:false,
              attendView:false,
              resultsView: true
            })
          })
          .catch((err) => {
            console.log(err)
          })
          console.log(this.state.resultsData)
      }
      toggleAttend = (e) => {
        window.scroll(0,0);
            this.setState({
                detailView:false,
                attendView:true,
                resultsView: false
            })
      }
      
      toggleAddLap = (param) => {
        console.log(param)
        console.log(`TRYR`)
        this.setState({showAddnew: true, laptimeUser:param})
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
          this.setState({addEventConfirm:true})
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
              attendUsers: res.data.attending,
              eventPics: res.data.pictures
            })
          })
          .catch((err) => {
            console.log(err)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }

      lapFunc = (e) => {
        e.preventDefault();
        let eventID = this.props.match.params.id
        let lapMin = e.target.min.value
        let lapSec = e.target.sec.value
        let lapMil = e.target.mil.value

        let laptimeUser = this.state.laptimeUser
        
        const postLaptimeConfig = {
          method: 'POST',
          url: `http://localhost:8080/events/${eventID}/results`,
          data: {
            user_id: laptimeUser,
            laptime: {
              min: lapMin,
              sec: lapSec,
              mil: lapMil
            }
          },
          headers: {
            'content-type': 'application/json'
          }
        }
        axios(postLaptimeConfig)
        .then((rezu) => { 
          console.log(rezu.data)
        })
        .catch((err) => {
          console.log(err)
        })
        this.setState({
          showAddnew: false,
        })
        console.log(`${lapMin} ${laptimeUser}`)
        //make post axios request to event to findby id nd update.
      }

      submitLaptimes = () => {
        let winArray = this.state.resultsData
        sort(winArray).asc([r => r.laptime.min,
          r => r.laptime.sec,
          r => r.laptime.mil ])
          const [winner, second, third, ...rest] = winArray
          const postPodium = {
            method: 'POST',
            url: `http://localhost:8080/podium`,
            data: {
              first: winner,
              second: second,
              third: third
            },
            headers: {
              'content-type': 'application/json'
            }
          }
          axios(postPodium)
          .then((rezz) => { 
           
          })
          .catch((err) => {
            console.log(err)
          }) 
          this.setState({resultsConfirm:true})
      }


  render() {
    let resultConfirm;
    if(this.state.resultsConfirm){
      resultConfirm = <ResultConfirm/>
    }

    let edate = this.state.eventData.eventDate
    let mmddyyyy = moment(edate).format('MMMM Do YYYY');
      let details;
      if(this.state.detailView){
          details =  <div className="eventPage__details">
          <div className="eventPage__details__pad">
          <h4 className="eventPage__details__label">DATE</h4>
          <h3 className="eventPage__details__info">{ mmddyyyy }</h3>

          <h4 className="eventPage__details__label">EVENT TYPE</h4>
          <h3 className="eventPage__details__info">{this.state.eventData.eventType}</h3>

          <h4 className="eventPage__details__label">LOCATION</h4>
          <h3 className="eventPage__details__info">{this.state.eventLoc}</h3>

          <h4 className="eventPage__details__label">VENUE</h4>
          <h3 className="eventPage__details__info">{this.state.eventVen}</h3>

          <h4 className="eventPage__details__label">CONTACT</h4>
          <h3 className="eventPage__details__info">{this.state.eventData.contact}</h3>
          </div>
          <div className="eventPage__details__gallery">
            <Gallery userPics={this.state.eventPics}/>
          </div>
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
            key={object.id} 
            addLap={this.toggleAddLap}/>
          })        
      }
//npm i array-sort to sort this array three times.
      let resultsMap;
      if(this.state.resultsView){
        let resultsArray = this.state.resultsData
       sort(resultsArray).asc([r => r.laptime.min,
                              r => r.laptime.sec,
                              r => r.laptime.mil ])
         resultsMap = resultsArray.map((o) => {
          return <UserResultCard min={o.laptime.min}
                                 id={o.user_id}
                                 sec={o.laptime.sec}
                                 mil={o.laptime.mil}/>
         })
      }

      let addLap;
      if(this.state.showAddnew){
        addLap = <LaptimeAdder submitLap={this.lapFunc} />
      }

      let addConfirm;
      if(this.state.addEventConfirm){
        addConfirm = <AddtoEventConfirm />
        setTimeout(() => {
          this.setState({addEventConfirm:false})
        }, 5000)
      }
    return (
      <div className="eventPage">
      { addLap }
      { addConfirm }
      { resultConfirm }

      <Spring
          from={{ opacity:0.1  }}
          to={{ opacity:1}}
          config={{duration:1000}}
        >
        { props => (
          <animated.div style={props}>
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
          </animated.div>
        )}
        </Spring>
        { details }
        <div className="eventPage__attending">
            { attendsMap }
        </div>
        <div className={this.state.resultsView ? "eventPage__results" : "hideme" }>
            <button onClick={this.submitLaptimes} className="eventPage__results__btn">
              <p>Submit Results</p>
            </button>
            <div className="medalsflex">
              <div className="eventPage__results--first">
                <img src={ medal } alt="" className="eventPage__results--first__icon"/>
                <p>1ST</p>
              </div>
              <div className="eventPage__results--second">
                <img src={ medal } alt="" className="eventPage__results--first__icon"/>
                <p>2nd</p>
              </div>
              <div className="eventPage__results--third">
                <img src={ medal } alt="" className="eventPage__results--first__icon"/>
                <p>3rd</p>
              </div>
            </div>
            { resultsMap }
        </div>
        <div onClick={this.addUsertoEvent} className={this.state.resultsView ? "hideme" : "eventPage__join"}>
          <p>JOIN EVENT</p>
        </div>
      </div>
    )
  }
}
