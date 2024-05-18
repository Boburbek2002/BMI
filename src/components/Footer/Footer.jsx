import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <div className="footer_top">
          <Row className="footer_text">
            <Col lg="4" md="4">
              <p className="container mb-3" style={{ color: 'white' }}>
                {t('footerDescription')}
              </p>
              <ul>
                <li style={{ color: 'white' }}>
                  {t('footerEmail')} jumaniyozovfaxriddin715@gmail.com
                </li>
                <li style={{ color: 'white' }}>{t('footerPhone')} +998 99 351 01 32</li>
                <li style={{ color: 'white' }}>{t('footerLocation')}</li>
              </ul>
            </Col>
            <Col lg="5" md="4">
              <div class="container">
                <h1 style={{ color: 'white' }}>{t('footerContact')}</h1>
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
                          placeholder={t('namePlaceholder')}
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          name="email"
                          class="form-control mb-2 bg-secondary border border-secondary shadow-none"
                          placeholder={t('emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      placeholder={t('messagePlaceholder')}
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
                      {t('submit')}
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
