import React, { Component } from 'react'
import '../styles/photoGallery.scss'

export default class CardPic extends Component {
  render() {
    return (
    <>
        <img className="eCard__picture" src={this.props.picUrl} alt="user pictures" />
    </>
    )
  }
}