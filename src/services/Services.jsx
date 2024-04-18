import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./services.css";
import about3 from "./../assets/images/about3.jpg";
import about2 from "./../assets/images/about2.jpg";
import about4 from "./../assets/images/about4.jpg";
import about5 from "./../assets/images/about5.jpg";
import about6 from "./../assets/images/about6.jpg";
import about1 from "./../assets/images/about1.jpg";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="4" md="4">
            <Link to="/thread1">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about1}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4" md="4">
            <Link to="/thread2">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about2}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4" md="4">
            <Link to="/thread3">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about3}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4" md="4">
            <Link to="/thread4">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about4}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4" md="4">
            <Link to="/thread5">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about5}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4" md="4">
            <Link to="/thread6">
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={about6}
                  style={{ height: "11.5rem" }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
