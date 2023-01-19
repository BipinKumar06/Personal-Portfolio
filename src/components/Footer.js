import React from 'react'

import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='px-5 bg-black'>
    <div style={{color:"white"}}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 border-top">
    <div className="col-md-4 d-flex align-items-center">
      
      <span className="text-white">© Portfolio, Bipin Kumar</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"> <a href="https://github.com/BipinKumar06" className="text-white"
      target="_blank" rel="noopener noreferrer">
  <AiFillGithub/>
      </a></li>
      <li className="ms-3"><a className="text-white" href="https://www.linkedin.com/in/bipin-kumar-77a1a5211/" 
     target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn/>
      </a></li>
      <li className="ms-3"><a className="text-white" href="https://www.instagram.com/bipin_kumar_556/"
      target="_blank" rel="noopener noreferrer">
       <AiFillInstagram/>
      </a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}
