import React, { Component } from 'react'
import '../styles/photoGallery.scss'

export default class Picture extends Component {
  render() {
    return (
    <>
        <img className="img" src={this.props.picUrl} alt="user pictures" />
    </>
    )
  }
}
