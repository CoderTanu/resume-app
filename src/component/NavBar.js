import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav_bar'>
           <ul className='nav-list'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Timeline</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
           </ul>
      </div>
    )
  }
}
