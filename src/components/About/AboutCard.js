import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjoy Majee </span>
            from <span className="purple"> Raniganj, West Bengal, India.</span>
            <br />I am a 2023-Grad at Jadavpur University with major in Electronics and Tele-Communication Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D Modelling (Blender)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you optimize everything, you will always be unhappy."{" "}
          </p>
          <footer className="blockquote-footer">Donald Knuth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
