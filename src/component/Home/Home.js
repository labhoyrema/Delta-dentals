import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  const handleNavigate = () => {
    navigate("/CheckOut");
  };
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
            <h3 className="mt-5 mb-5 text-center">Services</h3>
          </div>
          {cart.map((data) => (
            <Col sm={12} md={4} key={data.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                  <Button variant="success" onClick={handleNavigate}>
                    For booking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
