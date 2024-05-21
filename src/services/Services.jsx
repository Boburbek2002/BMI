import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './services.css';
import about1 from './../assets/images/fishing.jpg';
import about2 from './../assets/images/ransomware.jpg';
import about3 from './../assets/images/ddos.jpg';
import about4 from './../assets/images/mitm.jpg';
import about5 from './../assets/images/sql.jpg';
import about6 from './../assets/images/zeroday.jpg';
import about7 from './../assets/images/fishing.jpg';
import about8 from './../assets/images/fishing.jpg';
import about9 from './../assets/images/fishing.jpg';
import about10 from './../assets/images/fishing.jpg';
import about11 from './../assets/images/fishing.jpg';
import about12 from './../assets/images/fishing.jpg';

const Services = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  const [showAllDivs, setShowAllDivs] = useState(false);

  const divsData = [
    { image: about1, title: t('phishing'), text: t('phishingDesc') },
    { image: about2, title: t('ransomware'), text: t('ransomwareDesc') },
    { image: about3, title: t('denyService'), text: t('denyServiceDesc') },
    { image: about4, title: t('manInTheMiddle'), text: t('manInTheMiddleDesc') },
    { image: about5, title: t('sqlInjection1'), text: t('sqlInjectionDesc') },
    { image: about6, title: t('zeroDay'), text: t('zeroDayDesc') },
    // Additional data for divs 7 to 12
    { image: about7, title: t('more'), text: t('more') },
    { image: about8, title: t('more'), text: t('more') },
    { image: about9, title: t('more'), text: t('more') },
    { image: about10, title: t('more'), text: t('more') },
    { image: about11, title: t('more'), text: t('more') },
    { image: about12, title: t('more'), text: t('more') },
  ];

  const visibleDivs = showAllDivs ? divsData : divsData.slice(0, 6);

  return (
    <section className="services">
      <Container>
        <h1>{t('servicesTitle')}</h1><br/>
        <Row>
          {visibleDivs.map((divData, index) => (
            <Col key={index} lg='4' md='4'>
              <Link to={`/thread${index + 1}`}>
                <Card style={{ width: '100%', marginBottom: '20px' }}>
                  <Card.Img variant="top" src={divData.image} style={{height: '11.5rem'}} />
                  <Card.Body className="card-body"> {/* Add className for card body */}
                    <Card.Title>{divData.title}</Card.Title>
                    <Card.Text>
                      {divData.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        {!showAllDivs && (
          <div className="text-center">
            <Button onClick={() => setShowAllDivs(true)}>{t('more')}</Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Services;
