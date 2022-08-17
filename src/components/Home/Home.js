import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://user-images.githubusercontent.com/95302680/185217068-c3ce6c22-9818-4867-b743-d572494e3390.jpg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px",marginTop:"30px"}}
              /> 
               {/* <img
                src="https://media.istockphoto.com/vectors/children-coding-lettering-vector-id1084848808?k=20&m=1084848808&s=612x612&w=0&h=sDoFTkO2ZF_sj1KqWtBN3w0PGIz9RJ9GRTMBAAvasRg="
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              /> */}
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Chhatrapal Ahirwar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
