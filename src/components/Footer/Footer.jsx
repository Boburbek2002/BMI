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
              <p className="mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem corrupti animi culpa quisquam autem facere nemo ut earum
                voluptates! Eum rem aliquid consequuntur odio aspernatur quasi
                deserunt at? Nemo, tempora.
              </p>
              <ul>
                <li>
                  Email: faxriddincoder@gmail.com
                </li>
                <li>Phone: +998 99 351 01 32</li>
                <li>Xonqa, Xorazm, O'zbekiston</li>
              </ul>
            </Col>
            <Col lg="5" md="4">
              <div class="container">
                <h1>Biz bilan bog'lanish</h1>
                <form
                  target="_blank"
                  action="https://formsubmit.co/faxriddincoder@gmail.com"
                  method="POST"
                >
                  <div class="form-group">
                    <div class="form-row">
                      <div class="col">
                        <input
                          type="text"
                          name="name"
                          class="form-control mb-2 bg-secondary border border-secondary shadow-none"
                          placeholder="Ism"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          name="email"
                          class="form-control mb-2 bg-secondary border border-secondary shadow-none"
                          placeholder="Email manzilingiz"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      placeholder="Xabar"
                      class="form-control mb-2 bg-secondary border border-secondary shadow-none"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:3000/home"
                  />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary btn-block"
                    >
                      Jo'natish
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
