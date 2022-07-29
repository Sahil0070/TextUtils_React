import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="#">Home <span className="sr-only"></span></a>
        {/* <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">Home <span className="sr-only"></span></Link> */}
      </li>
      {/* <li className="nav-item">
        <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="about">{props.about}</a>
      </li> */}
    </ul> 
 
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
</div>
</nav>
  )
}
Navbar.propTypes = {
  title :PropTypes.string.isRequired,
  about :PropTypes.string.isRequired,
}
Navbar.defaultProps  = {
  title :"Title",
  about :"About"
}
