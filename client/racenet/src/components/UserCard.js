import React, { Component } from 'react';
import '../styles/eventPage.scss';
import profilePic from '../baseUserPic.jpg';
import medalIIcon from '../medal.svg';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import addIcon from '../addLaptime.svg';

export default class UserCard extends Component {

  setBGcolor = () => {
    let go = this.props.golds
    let si = this.props.silvers
    let br = this.props.bronzes

    let bgGold = "bgGold"
    let bgSil = "bgSilver"
    let bgBronz = "bgBronze"

    if (go >= si && go >= br) { return bgGold; }
    else if (si > go && si > br) { return bgSil; }
    else if (br > go && br > si) { return bgBronz; }
  }

  render() {
    let addLaptime = this.props.addLap
    let uid = this.props.id
    return (
      // <ScrollAnimation initiallyVisible="true" offset="200" animateIn="slideInleft" animateOut="slideOutRight">
      
      <div className={this.setBGcolor()} id="x">
       <div className="usercard--overlay"></div>
       <div className="usercard--shine"></div>
       
        <img className="userCard__pp" src={ profilePic } 
            alt="user Profile Pic"/>   
        <div className="userCard__div">
   
        <img onClick={()=>{ addLaptime(uid) }} src={ addIcon } alt={`add laptime for user ${uid}`} className="userCard__div__addIcon"/>

        <Link to={"/Profile/" + uid} title={uid} style={{ textDecoration: 'none' }}><h5>{this.props.name}</h5></Link>
            <div className="userCard__div__res">
                <div className="userCard__div__res__gold">
                    <img src={ medalIIcon } alt="medal" className="medalIIcon"/>
                    <p className="userCard__div__res__gold__p">{this.props.golds}</p>
                </div>
                <div className="userCard__div__res__silver">
                    <img src={ medalIIcon } alt="medal" className="medalIIcon"/>
                    <p className="userCard__div__res__silver__p">{this.props.silvers}</p>
                </div>
                <div className="userCard__div__res__bronze">
                    <img src={ medalIIcon } alt="medal" className="medalIIcon"/>
                    <p className="userCard__div__res__bronze__p">{this.props.bronzes}</p>
                </div>
            </div>
        </div>
      </div>
   
    )
  }
}
