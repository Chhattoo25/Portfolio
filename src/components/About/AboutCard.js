import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p className='para'>Hello 👋👋 Eveyone I am Chhavi Srivastav💁‍♀️ From Basti-Utter-Pradesh. Currently  I am a student of MASAI SCHOOL.<br></br>
                     Analytical and detail-oriented Full Stack Web Developer <br></br>who is proficient with the MERN stack and good at user-centric solutions.<br></br> Collaborative, team player, and proficient in working with interdisciplinary teams and executing goal-oriented projects.<br></br> Strongly interested in obtaining a Software Developer position to work on enhancing the product 
                         
</p>
        
          </p>
         
         
          <footer className="blockquote-footer">Chhavi💁‍♀️</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
