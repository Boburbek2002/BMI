import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import GridLoader from "react-spinners/GridLoader";
import i18n from '../../i18n';
import ThemeToggle from '../ThemeToggle'


const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('day');


  
  useEffect(() => {
    setLoading(false);
  }, []);

  

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'day';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);


  useEffect(() => {
    // Set default language to Uzbek if no language is set
    const currentLanguage = localStorage.getItem('i18nextLng');
    if (!currentLanguage) {
      i18n.changeLanguage('uz');
    }
  }, []);

  
  return (
    <div className={`app ${theme}`}>
      {loading ? (
        <div className="loader">
          <GridLoader color={"#36d7b7"} size={30} />
        </div>
      ) : (
        <div>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <div>
            <Routers />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
