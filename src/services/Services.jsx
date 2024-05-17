import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
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
  // State to manage whether to show all divs or not
  const [showAllDivs, setShowAllDivs] = useState(false);

  // Array containing data for all 12 divs
  const divsData = [
    { image: about1, title: 'Phishing', text: 'Phishing elektron aloqada ishonchli shaxs sifatida niqoblanib, parollar, kredit karta raqamlari yoki shaxsiy ma\'lumotlarni o\'g\'irlash.' },
    { image: about2, title: 'Ransomware', text: 'Pul summasi ("to\'lov") to\'lanmaguncha kompyuter tizimi yoki fayllarga kirishni bloklash uchun mo\'ljallangan zararli dastur turi.' },
    { image: about3, title: 'Xizmatni rad etish', text: 'DoS va DDoS hujumlari kompyuter tizimi, tarmoq yoki saytni trafik oqimi bilan to\'ldirish orqali normal ishlashini buzishga qaratilgan.' },
    { image: about4, title: 'Man-in-the-Middle (O\'rtadagi odam)', text: 'O\'rtadagi odam hujumlari tajovuzkor ikki tomon o\'rtasida aloqani to\'xtatganda va potensial ravishda o\'zgartirganda sodir bo\'ladi.' },
    { image: about5, title: 'SQL Inyeksiya', text: 'SQL Inyeksiya - bu kirish maydonlariga zararli SQL kodini kiritish orqali veb-ilovalarga qaratilgan kiberhujum turi.' },
    { image: about6, title: 'Nolinchi kun', text: 'Nolinchi kun hujumi sotuvchi yoki jamoatchilikka hali ma\'lum bo\'lmagan dasturiy yoki apparatdagi zaifliklarga qaratilgan.' },
    // Additional data for divs 7 to 12
    { image: about7, title: 'Title 7', text: 'Text 7' },
    { image: about8, title: 'Title 8', text: 'Text 8' },
    { image: about9, title: 'Title 9', text: 'Text 9' },
    { image: about10, title: 'Title 10', text: 'Text 10' },
    { image: about11, title: 'Title 11', text: 'Text 11' },
    { image: about12, title: 'Title 12', text: 'Text 12' },
  ];

  // Slice the array based on showAllDivs state
  const visibleDivs = showAllDivs ? divsData : divsData.slice(0, 6);

  return (
    <section className="services">
      <Container>
        <h1>Eng ko'p uchraydigan kiber hujumlar</h1><br/>
        <Row>
          {visibleDivs.map((divData, index) => (
            <Col key={index} lg='4' md='4'>
              <Link to={`/thread${index + 1}`}>
                <Card style={{ width: '100%', marginBottom: '20px' }}>
                  <Card.Img variant="top" src={divData.image} style={{height: '11.5rem'}} />
                  <Card.Body>
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
        {/* Button to toggle visibility of all divs */}
        {!showAllDivs && (
          <div className="text-center">
            <Button onClick={() => setShowAllDivs(true)}>Ko'proq</Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Services;
