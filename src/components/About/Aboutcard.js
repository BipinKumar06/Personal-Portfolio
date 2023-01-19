import React from 'react'
import { ImPointRight } from 'react-icons/im'
import { Container,Row,Col } from 'react-bootstrap'
import about from '../../assets/about.png'
import Techstack from './Techstack'
function Aboutcard() {
  return (
    <div className='pt-5 pb-5' style={{alignItems:"center"}}>
        <Container>
      <Row className='pt-5 pb-5'>
        <Col>
        <h1><strong>
            Know Who <span style={{color:"purple"}}>I'M</span>
       </strong> </h1>
        <p/>
      <h4> Hi Everyone,I am <span style={{color:"purple"}}>Bipin Kumar</span> from <span style={{color:"purple"}}>Ranchi, Jharkhand.</span>
<p>
    I am a junior pursuing BTECH in Computer Science in BIT Mesra. 
</p>
<p/>
Apart From coding,some other activies that I love to do!
<br/>
<ImPointRight/>&nbsp; Playing Games
<br/>
<ImPointRight/>&nbsp; Listening Music
<br/>
<p/>
 </h4> 
  </Col>
   <Col>
    <img src={about} alt="about" style={{maxWidth:"400px",maxHeight:"500px"}}/>

   </Col>
   </Row>
<Row>
<h1>
          <strong> Professional <span style={{color:"purple"}}>Skillset</span></strong>
          <Techstack/>
        </h1>
</Row>
  </Container>
    </div>
  )
}

export default Aboutcard