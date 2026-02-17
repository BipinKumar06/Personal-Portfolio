import React from 'react'
import {Link} from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen} from "react-icons/ai";


function Navbar() {
  return (
    <div><nav className="navbar justify-content-between">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><h2><span><b><strong>BK.</strong></b></span></h2></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-expand-lg" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white active " aria-current="page" to="/"><ImHome/>&nbsp;Home</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link" to="/about"><BsFillPersonFill/>&nbsp;About</Link>
          </li>
          <li className="nav-item">
            <Link className="text-white nav-link" to="/projects"><AiOutlineFundProjectionScreen/>&nbsp;Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar
