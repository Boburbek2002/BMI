import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container } from "reactstrap";
import Services from "../services/Services";
import { useTranslation } from 'react-i18next';
import '../App.css'

const Home = () => {

  const { t } = useTranslation(); // Initialize useTranslation hook


  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <div className="about" >
            <h3 style={{ color: 'white' }}>{t('home')}</h3>
          </div>
        </Container>
      </section>

      <Services />
    </Helmet>
  );
};

export default Home;
