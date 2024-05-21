// ThemeToggle.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'day' ? (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="2x" />
      )}
    </div>
  );
};

export default ThemeToggle;
