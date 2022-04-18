import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import dlogo from "../../images/logo.png";
import "./Home.css";

const Home = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <>
      <section className="bg-img ">
        <Container>
          <Row className="bg-image justify-content-center">
            <Col sm={12} md={5} className="hero-text">
              <h2>Make Your Dental Experience a Lot Brighter</h2>
              <p>
                With Best Failities and better equipments, you are in safe hands
              </p>
            </Col>
            <Col sm={12} md={7}></Col>
          </Row>
        </Container>
      </section>
      <Container className="mt-5 mb-5">
        <Row>
          <div>
            <h3>Services</h3>
          </div>
          {cart.map((data) => (
            <Col sm={12} md={4} key={data.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                  <Button variant="success">For booking</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row className="mt">
          <Col sm={12} md={4}>
            <img className="w-50" src={dlogo} alt="" />
            <p>
              Regular dental checkups help in detection of early warning signs
              of certain health related issues. Visit your dentists regularly
              and stay healthy.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <p>
              Oppening hours:<br></br> Evrey day: 07:00 – 23:00h
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h3>Contact Address</h3>
            <p>64C East Crest, Melane Planza, DanyBoyle, TT33546</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
