import React, { Component } from 'react'
import '../styles/eventCardSm.scss'

export default class EventCardSm extends Component {
  render() {
    return (
      <div className="eCardSm">
        <h3>{this.props.name}</h3>
        <p>{`${this.props.month}-${this.props.day}, 2019`}</p>
        <h4>{this.props.abrev}</h4>
      </div>
    )
  }
}
