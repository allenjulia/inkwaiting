import React, {Component} from 'react'
import Gallery from './Gallery.js'
import './Reset.css'
import './Home.css'

export default class Header extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="container header-container">
          <h1 className="page-title" href="inkwaiting.com">InkWaiting</h1>
          <div className="mobile-hamburger"></div>
          <div className="nav"> 
            <a className="nav-bar" href="/gallery">Gallery</a>
            <a className="nav-bar" href="/about">About</a>
            <a className="nav-bar" href="/store">Store</a>
            <a className="nav-bar" href="commissions">Commissions</a>
          </div>  
      </div>
    )
  }
}