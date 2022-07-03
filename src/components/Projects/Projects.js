import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";

import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a Some projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              src="https://camo.githubusercontent.com/e5a2e8de2e59d52381709341b1b66dca18a6f0b6de64593137733af0f5ecf364/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633393932373138353137372f6469544e6f497234712e706e673f773d3136303026683d383430266669743d63726f702663726f703d656e74726f7079266175746f3d636f6d7072657373"
              isBlog={false}
              title="Bella-Vita-Organic"
              description="Bella Vita Organic, Inc. is an Indian Health care Organic store. Founded in 2005 by W. Verman and F. Walia, it originated as a Organic Products store and evolved into a full-line retailer with departments for Hair Care, Skin Care, Body Care, cosmetics, and fragrances..."
              link="https://github.com/Chhattoo25/Bella-Vita-organic-project"
              live="https://darling-malabi-cb1632.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              src="https://user-images.githubusercontent.com/95302680/177006301-2461480e-880e-4464-8fd3-f33a287878aa.png"
              title="Beminimalist-Clone"
              description="About
              This project is a clone of an e-commerce website (Be-Minimalist), It is created with the collaboration of our team of 6 members in 5 days. Beminimalist provides beauty care products across the glob and the company main objectives is to provide a transparency of products."
              link="https://github.com/Chhattoo25/beminimalist-clone"
              live="https://be-minimalist-clone-eb6e54.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              src="https://user-images.githubusercontent.com/95302680/177006027-e0987ef2-320e-4814-b929-61dd4d5b3212.png"
              isBlog={false}
              title="Indian Express"
              description="At a time when India was struggling for her freedom, oppression was rife and the press virtually gagged, one voice dared to break the silence. Founded by Shri Ramnath Goenka in 1932, The Indian Express gave India a voice of opinion that was fearless and true."
              link="https://github.com/Chhattoo25/indianExpress"
              live="https://indianexpressclone.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              src="https://user-images.githubusercontent.com/95302680/177006397-c1687167-b043-45c4-b7ee-b8ce8ff5467f.png"
              isBlog={false}
              title="Weather App"
              description=" This is the weather app in which you can search any city name and get relative city weather along with map and also get seven days weather"
              link="https://github.com/Chhattoo25/weatherappassignment"
              live="https://relaxed-chaja-8e5045.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              src="https://user-images.githubusercontent.com/77965216/162609373-4b4327d0-ef6d-4c5c-bcb3-245f3fbb8101.JPG"
              isBlog={false}
              title="Youtube Clone"
              description=""
              link="https://github.com/chhavi48/api-class-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              src="https://pbs.twimg.com/ext_tw_video_thumb/1403911292591611905/pu/img/R3_e8jOvhmhEI5uZ?format=jpg&name=large"
              isBlog={false}
              title="Car Animation"
              description="i have done 100+ animations with only css "
              link="https://github.com/chhavi48/moving-car"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              src="https://user-images.githubusercontent.com/77965216/170807531-65f9c728-e574-43fe-8563-8c5aa7301f12.png"
              isBlog={false}
              title="HandGesture"
              description=""
              link="https://github.com/chhavi48/GestureRecognition"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
