import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import './services.css'
import about3 from './../assets/images/ddos.jpg';
import about2 from './../assets/images/ransomware.jpg';
import about4 from './../assets/images/mitm.jpg';
import about5 from './../assets/images/sql.jpg';
import about6 from './../assets/images/zeroday.jpg';
import about1 from './../assets/images/fishing.jpg'

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg='4' md='4'>
            <Link to="/thread1">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about1} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>Fishing</Card.Title>
                  <Card.Text>
                  Fishing elektron aloqada ishonchli shaxs sifatida niqoblanib, parollar, kredit karta raqamlari yoki shaxsiy ma'lumotlarni o'g'irlash.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            
          </Col>
          <Col lg='4' md='4'>
            <Link to="/thread2">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about2} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>Ransomware</Card.Title>
                  <Card.Text>
                  Pul summasi ("to'lov") to'lanmaguncha kompyuter tizimi yoki fayllarga kirishni bloklash uchun mo'ljallangan zararli dastur turi.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            
          </Col>
          <Col lg='4' md='4'>
            <Link to="/thread3">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about3} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>Xizmatni rad etish</Card.Title>
                  <Card.Text>
                  DoS va DDoS hujumlari kompyuter tizimi, tarmoq yoki saytni trafik oqimi bilan to'ldirish orqali normal ishlashini buzishga qaratilgan. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            
          </Col>
          <Col lg='4' md='4'>
            <Link to="/thread4">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about4} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>Man-in-the-Middle (O'rtadagi odam) </Card.Title>
                  <Card.Text>
                  O'rtadagi odam hujumlari tajovuzkor ikki tomon o'rtasida aloqani to'xtatganda va potensial ravishda o'zgartirganda sodir bo'ladi. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg='4' md='4'>
            <Link to="/thread5">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about5} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>SQL Inyeksiya</Card.Title>
                  <Card.Text>
                  SQL Inyeksiya - bu kirish maydonlariga zararli SQL kodini kiritish orqali veb-ilovalarga qaratilgan kiberhujum turi.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>            
          </Col>
          <Col lg='4' md='4'>
            <Link to="/thread6">
              <Card style={{ width: '100%', marginBottom: '20px' }}>
                <Card.Img variant="top" src={about6} style={{height: '11.5rem'}} />
                <Card.Body>
                  <Card.Title>Nolinchi kun</Card.Title>
                  <Card.Text>
                  Nolinchi kun hujumi sotuvchi yoki jamoatchilikka hali ma'lum bo'lmagan dasturiy yoki apparatdagi zaifliklarga qaratilgan. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services