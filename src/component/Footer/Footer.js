import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dlogo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr></hr>
      <Container>
        <Row className="mt">
          <Col sm={12} md={4} className="wrap">
            <img className="w-50 img-m" src={dlogo} alt="" />
            <p className="text">
              Regular dental checkups help in detection of early warning signs
              of certain health related issues. Visit your dentists regularly
              and stay healthy.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <p className="text-opening">
              <span className="timing">Oppening hours:</span>
              <br></br>
              <span className="time">Evrey day: 07:00 – 23:00h</span>
            </p>
          </Col>
          <Col sm={12} md={4} className="text-center">
            <h3>Contact Address</h3>

            <p>
              64C East Crest, <br></br>Melane Planza,<br></br> DanyBoyle,{" "}
              <br></br>TT33546
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
