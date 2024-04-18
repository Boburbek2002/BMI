import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const nav__links = [
  {
    path: "home",
    display: "About",
  },
  {
    path: "statistics",
    display: "Statistika",
  },
  {
    path: "resurses",
    display: "Resurslar",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              {/* <img src={logo} alt="Logo" /> */}
              <div>
                <h1>Logo</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
