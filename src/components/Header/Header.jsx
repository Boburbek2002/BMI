import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";
import logo from "./../../assets/images/Logo.png";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggle from "../ThemeToggle";
import '../../App.css';

const nav__links = [
  {
    path: "home",
    displayKey: "homeDisplay",
  },
  {
    path: "statistics",
    displayKey: "statisticsDisplay",
  },
  {
    path: "resurses",
    displayKey: "resourcesDisplay",
  },
];

const Header = ({ toggleTheme, theme }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="menu-icon" onClick={handleMobileMenuToggle}>
              ☰
            </div>

            <div className={`navigation ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} activeClassName="nav__active">
                      {t(item.displayKey)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__right">
              <LanguageSwitcher />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
