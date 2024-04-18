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
            <h1>Random Text on Image</h1>
          </div>
        </Container>
      </section>

      <Services />
    </Helmet>
  );
};

export default Home;
