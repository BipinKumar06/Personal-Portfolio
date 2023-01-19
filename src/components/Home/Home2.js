import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home2() {
  return (
    <div className='pt-5 pb-5'>
   <Container className='pt-5 pb-5'>
    <Row>
      <Col>
      <h1>
        Let Me <span style={{color:"purple"}}>Introduce</span> Myself
      </h1>
     <span style={{fontWeight:"bold"}}> I fell in love with the coding,solving Problems,I learnt Something,I think...🤷‍♂️
     <p/>
     I am Fluent in classics like <span style={{color:"purple",fontFamily:"italic"}}>C++,Javscript.</span>
     <p/>My Interest is in Web Development and Competitive Coding.
      </span>
      </Col>
    </Row>
    <Row>
      <h2 className='pt-5'>FIND ME ON</h2>
      <span style={{fontWeight:"bold"}}>
        Feel free to <span style={{color:"purple",fontFamily:"italic"}}>connect</span> with me
      </span>
     
    </Row>
    <Row>
       <div>
      <ul className="pt-3 nav justify-content-center list-unstyled d-flex">
      <li className="ms-3 connect"> <a href="https://github.com/BipinKumar06" className="text-white"
      target="_blank" rel="noopener noreferrer">
  <AiFillGithub/>
      </a></li>
      <li className="ms-3 connect"><a className="text-white" href="https://www.linkedin.com/in/bipin-kumar-77a1a5211/" 
     target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn/>
      </a></li>
      <li className="ms-3 connect"><a className="text-white" href="https://www.instagram.com/bipin_kumar_556/"
      target="_blank" rel="noopener noreferrer">
       <AiFillInstagram/>
      </a></li>
    </ul></div>
    </Row>
   </Container>
    </div>
  )
}

export default Home2