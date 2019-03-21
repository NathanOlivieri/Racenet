import React, { Component } from 'react'
import '../styles/records.scss'
import medalicon from '../medal.svg';

export default class Records extends Component {

  render() {
    return (
      <div className="results">
        <div className="container__gold">
            <img src={ medalicon } alt="iconmedal" className="medalicon"/>        
            <p>{`${this.props.userData.golds}`}</p>
        </div>
        <div className="container__silver">
        <img src={ medalicon } alt="iconmedal" className="medalicon"/>        
            <p>{`${this.props.userData.silvers}`}</p>
        </div>
        <div className="container__bronze">
        <img src={ medalicon } alt="iconmedal" className="medalicon"/>        
            <p>{`${this.props.userData.bronzes}`}</p>
        </div>
        <div className="container__total">
        <img src={ medalicon } alt="iconmedal" className="medalicon"/>        
            <p>{Math.floor(this.props.userData.golds + 
                           this.props.userData.silvers + 
                           this.props.userData.bronzes)}</p>
        </div>
      </div>
    )
  }
}
