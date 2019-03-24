import React, { Component } from 'react'
import '../styles/eventPage.scss'

export default class LaptimeAdder extends Component {
  render() {
      let addLapTime = this.props.submitLap
    return (
      <div>
        <div className="lap__bg">
            <form onSubmit={ addLapTime } className="lap">
            <div className="lapCont">
                    <label className="lapCont__label" htmlfor="userLaptime">Enter Laptime</label>
                    <div className="lapCont__flex">
                        <input placeholder="00" className="lapCont__input" type="text" name="min" id="userLapMin"/>
                        <input placeholder="00" className="lapCont__input" type="text" name="sec" id="userLapSec"/>
                        <input placeholder="000" className="lapCont__input" type="text" name="mil" id="userLapMil"/>
                    </div>
                    <button type="submit" className="lapCont__btn"><p>Submit Laptime</p></button>
            </div>
            </form>
        </div>
      </div>
    )
  }
}
