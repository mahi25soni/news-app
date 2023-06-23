import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">NewsMonkey</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active"><Link className="nav-link" to="/">home</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/business">business</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/health">health</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/science">science</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/sports">sports</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/technology">technology</Link></li>

    </ul>
  </div>
</nav>
      </>
    )
  }
}
