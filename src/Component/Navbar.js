import React from 'react';
// import PropTypes from 'prop-types'

import { Link } from "react-router-dom";
import '../App.css';


export default function Navbar(props) {

  let myStyle ={
    color: 'light',
    backgroundColor:'light'
  }
  return (
    <div>
<header>
        <nav className="navbar" style={myStyle}>
            <ul >
              <div className="link"><Link to="/">{props.Home}</Link></div>
              <div className="link"> <Link to="/about">about</Link></div>
              <div className="link"><Link to="/contect">Contect</Link></div>
                 <div className="search">
                    <input type="text" name="search" id="search" placeholder="Search this website"/>
                </div>
            </ul>
        </nav>
    </header>
    </div>
  )
}



// Navbar.PropTypes = {
//   Home: PropTypes.string.isRequired
// }

Navbar.defaultProps={
  Home:'home'
}