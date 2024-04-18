// Footer.js
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer_top">
          <Row className="footer_text">
            <Col lg="4" md="4">
              <h1>Hello!</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem corrupti animi culpa quisquam autem facere nemo ut earum
                voluptates! Eum rem aliquid consequuntur odio aspernatur quasi
                deserunt at? Nemo, tempora.
              </p>
            </Col>
            <Col lg="5" md="4">
              <ul>
                <li>Email: jumaniyozovfaxriddin715@gmail.com</li>
                <li>Phone: +998 91 315 01 32</li>
                <li>Address: Xonqa, Xorazm, O'zbekiston</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="footer_bottom">
          <ul>
            <li>
              <i class="bi bi-instagram"></i>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
