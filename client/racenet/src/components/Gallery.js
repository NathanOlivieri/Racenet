import React, { Component } from 'react'
import '../styles/photoGallery.scss'
import Picture from '../components/Picture.js'
import Video from '../components/Video.js'

export default class Gallery extends Component {
  render() {
    let pictures = this.props.userPics
    let picturesJSX = [];
    for(let i = 0; i < pictures.length; i++){
      let picture = <Picture picUrl={pictures[i]}
      key={`key${i}`} />
      picturesJSX.push(picture);
    }
    return (
      <div className="photos">
        <h2>PHOTOS / VIDEOS</h2>
        <div className="photos__gallery">
          { picturesJSX }
        </div>
        <div className="photos__vidGallery">
          <Video />
        </div>
      </div>
    )
  }
}
