import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container } from "reactstrap";
import Services from "../services/Services";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <div className="about">
            <h3>Tahdidlarnini oldini olish usullarini o'rgatishga bag'ishlangan saytimizga xush kelibsiz! Biz shaxslar va tashkilotlarni kibertahdidlar keltirib chiqaradigan xavflarni qanday aniqlash va kamaytirish bo'yicha o'rgatish niyatidamiz</h3>
          </div>
        </Container>
      </section>

      <Services />
    </Helmet>
  );
};

export default Home;
