import React, {Component} from 'react'
import './Reset.css'
import './Home.css'

export default class Header extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="container ">
          <h1 className="page-title" href="inkwaiting.com">InkWaiting</h1>
          <h4 className="page-title about-me">by JLA</h4>
        <div className="info-container"> 
          <h2 className="contact insta">Instagram:</h2> 
          <h3 className="contact info insta"> @inkwaiting</h3>
          <h2 className="contact email">Email:</h2> 
          <h3 className="contact info email email-info"> jla@inkwaiting.com</h3>
          <h2 className="contact venmo">Venmo:</h2> 
          <h3 className="contact info venmo venmo-info"> @inkwaiting</h3>
        </div>
        <div className="commissions">
          <h2 className="commission-info">Commissions:</h2>
          <h3 className="commissions-yes-no">Open</h3>
        </div>
        <div className="gallery">
        </div>    
      </div>
    )
  }
}