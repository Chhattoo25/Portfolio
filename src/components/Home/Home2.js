import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT</span> 
            </h1>
            <p className="home-about-body">
            <h4 className='aboutdata'>Full Stack Web-developer</h4>
                     <p className='para'>Hello 👋👋 Everyone I am Chhatrapal Ahirwar From Chhatarpur,Madhya Pradesh. Currently  I am a student of MASAI SCHOOL.<br></br>
                     Analytical and detail-oriented Full Stack Web Developer <br></br>who is proficient with the MERN stack and good at user-centric solutions.<br></br> Collaborative, team player, and proficient in working with interdisciplinary teams and executing goal-oriented projects.<br></br> Strongly interested in obtaining a Software Developer position to work on enhancing the product 
                         
</p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEDXJKnYe9QCw/profile-displayphoto-shrink_200_200/0/1647835085087?e=1655942400&v=beta&t=Adhs1TT9S37ppv1utC8gSgZTVQcbJoVl9fiFiVl8im4" className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chhattoo25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ChhatrapalAhir3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chhatrapal-ahirwar-12b9aa217"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
