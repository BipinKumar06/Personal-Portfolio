import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Typewriter from "typewriter-effect";
import homelogo from "../../assets/home-logo.jpeg";
function Home() {
  return (
    <div className="pt-5 pb-5">
      <Container fluid className="home-section pt-5 pb-5" id="home">
        <Row className="pb-5">
          <Col>
            <div className="text-center">
              <h1>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1>
                I'M <strong style={{ color: "purple" }}>BIPIN KUMAR</strong>
              </h1>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "DSA Learner",
                      "Coding Enthusiast",
                    ],
                    loop: true,
                    autoStart: true,
                  }}
                />
              </h1>
            </div>
          </Col>
          <Col>
            <img
              src={homelogo}
              className="img-fluid"
              alt="homepicture"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
      <Home2 />
    </div>
  );
}

export default Home;
