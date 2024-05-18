// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Import the CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('i18nextLng', event.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={changeLanguage} defaultValue={i18n.language} >
        <option value="en">En</option>
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
