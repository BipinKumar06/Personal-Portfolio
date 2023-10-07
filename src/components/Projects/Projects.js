import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import portfolio from '../../assets/portfolio.png'
import Projectcards from './Projectcards'
import weather from '../../assets/weather.png'
import drumkit from '../../assets/drumkit.png'
import calc from '../../assets/calc.png'
import tiktak from '../../assets/tiktak.png'
import sorting from '../../assets/sorting.png'
import mng from '../../assets/frontview.jpg'
function Projects() {
  return (
    <div>
<Container fluid className='project-section'>
  <Container className='mt-5 mb-5 pt-5 pb-5'>
    <h1>
    My Recent <span style={{color:"purple"}}><strong>Works</strong></span>
    </h1>
    <h5>
      Here are a few projects that I'have worked on recently
    </h5>
  <Row className="pt-5"style={{justifyContent:"center",paddingBottom:"10px"}}>
    <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={mng}
    title="Attendence Management System"
    isBlog={false}
    description="A hostel application management web app to track students where they are,and note the attendance of students according to room Number"
    ghlink="https://github.com/BipinKumar06/attendance_mangement_system"
    demolink="https://attendancemanagementsystem.cyclic.app/"
    />
  </Col>
  <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={sorting}
    title="Sorting Visualizer"
    isBlog={false}
    description="A Web Tool which help to use the visualizing the various method of Sorting Algorithm"
    ghlink="https://github.com/BipinKumar06/Sorting_Visualizer"
    demolink="https://bipinkumar06.github.io/Sorting_Visualizer/"
    />
  </Col>
  <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={weather}
    title="Weather App"
    isBlog={false}
    description="Website that help to know the weather of specific region using API"
    ghlink="https://github.com/BipinKumar06/Weather_App"
    demolink="https://bipinkumar06.github.io/Weather_App/"
    />
  </Col>
  <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={drumkit}
    title="Drum Kit"
    isBlog={false}
    description="Website based on the beats of drums"
    ghlink="https://github.com/BipinKumar06/Drum-kit"
    demolink="https://bipinkumar06.github.io/Drum-kit/"
    />
  </Col>
  <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={portfolio}
    title="Basic Portfolio"
    isBlog={false}
    description="My Static Porfolio build in may 2021"
    ghlink="https://github.com/BipinKumar06/Portfolio"
    demolink=" https://bipinkumar06.github.io/Portfolio/"
    />
  </Col>
  <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={calc}
    title="Calculator"
    isBlog={false}
    description="Website having calculator with simpler functions"
    ghlink="https://github.com/BipinKumar06/Basic-Calculator"
    demolink="https://bipinkumar06.github.io/Basic-Calculator/"
    />
  </Col>
      <Col md={4} className="project-card"  style={{background:"inherit",maxWidth:"300px",borderRadius:"20px",marginRight:"30px",marginBottom:"30px"}}>
    <Projectcards imgPath={tiktak}
    title="Tik Tak Toe"
    isBlog={false}
    description="Website having tic-tak-toe game"
    ghlink="https://github.com/BipinKumar06/Tik-Tac_toe-Game"
    demolink="https://bipinkumar06.github.io/Tik-Tac_toe-Game/"
    />
  </Col>
  </Row>
  </Container>
</Container>
    </div>
  )
}

export default Projects
