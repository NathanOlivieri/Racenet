import React, { Component } from 'react';
import '../styles/eventPage.scss';
import profilePic from '../baseUserPic.jpg';
import medalIIcon from '../medal.svg';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import addIcon from '../addLaptime.svg';
import axios from 'axios';

export default class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
           user_id: this.props.id
        };
      }

      componentDidMount(){
        let uid = this.state.user_id
        let getuserConfig = {
            method: 'GET',
            url: `http://localhost:8080/users/${uid}`
          }
          axios(getuserConfig)
            .then((res) => {
              this.setState({
                userName:res.data.name
              })
              console.log(this.state.userEvents)
            })
            .catch((err) => {
              console.log(err)
            })
      }

  render() {
    let addLaptime = this.props.addLap
    let uid = this.props.id
    let min = this.props.min
    let sec = this.props.sec
    let mil = this.props.mil

    return (
      // <ScrollAnimation initiallyVisible="true" offset="200" animateIn="slideInleft" animateOut="slideOutRight">
      //color should be according to placement//
      <div className="bgGoldres" id="x">
       <div className="usercard--overlay"></div>
       <div className="usercard--shine"></div>
       
        <img className="bgGoldres__pp" src={ profilePic } 
            alt="user Profile Pic"/>   
        <div className="bgGoldres__div">
            <Link to={"/Profile/" + uid} title={uid} style={{ textDecoration: 'none' }}><h5>{this.state.userName}</h5></Link>
            <div className="userCard__div__res">
                <p className="userCard__div__res__gold__p">{`${this.props.min}:${this.props.sec}:${this.props.mil}`}</p>
            </div>
        </div>
      </div>
    )
  }
}
