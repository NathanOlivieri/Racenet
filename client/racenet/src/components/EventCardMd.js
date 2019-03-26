import React, { Component } from 'react'
import '../styles/eventCardMd.scss';
import userIcon from '../person-icon.svg';
import { Link } from 'react-router-dom';
import Picture from './Picture';
import CardPic from './CardPic';


export default class EventCardMd extends Component {
  render() {
    let eid = this.props.id
    let pictures = this.props.ePics
    let picturesJSX = [];
    for(let i = 0; i < pictures.length; i++){
      let picture = <CardPic picUrl={pictures[i]}
      key={`key${i}`} />
      picturesJSX.push(picture);
    }
    return (
      <Link to={"/events/" + eid} title={eid} style={{ textDecoration: 'none' }}>
      <div className="eCard">
      {/* <div className="eCard__flex"> */}
        <div className="eCard--overlay"></div>
        <h3>{this.props.name}</h3>
        <p>{this.props.eventDate}</p>
        <p>{this.props.type}</p>
        <div className="eCard__attending">
          <img src={ userIcon } alt="User-Icon"/>
          <p>{this.props.attending}</p>
        </div>
        <p>Pictures</p>
        <div className="eCardGallery">
        {/* <div className="eCard--overlay"></div> */}
            { picturesJSX }
        </div>
    
          {/* <img className="eCard__picture" src={ picturesJSX } alt="picture"/> */}
        {/* </div> */}
      </div>
      </Link>
    )
  }
}
