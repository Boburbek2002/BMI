import React from "react";
import { useTranslation } from "react-i18next";
import '../App.css';

const Resurses = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <strong>{t('resursesTitle')}</strong><br/><br/>

      <p>
        {t('resurses1')} <a href="https://www.youtube.com/@csecuz" target="_blank" rel="noopener noreferrer">youtube.com/@csecuz</a> {t('resurses2')}
      </p><br/>

      <p>
        {t('resurses3')} <a href="https://www.youtube.com/@cyber_102" target="_blank" rel="noopener noreferrer">youtube.com/@cyber_102</a> {t('resurses4')}
      </p><br/>

      <p>
        {t('resurses5')} <a href="https://fake.cyber102.uz/" target="_blank" rel="noopener noreferrer">fake.cyber102.uz</a> {t('resurses6')}
      </p><br/>

      <p>
        {t('resurses7')} <a href="https://youtube.com/@csclubuz" target="_blank" rel="noopener noreferrer">youtube.com/@csclubuz</a>
      </p><br/>

      <p>
        {t('resurses8')} <a href="https://youtube.com/@milliy_talim_resurslar" target="_blank" rel="noopener noreferrer">youtube.com/@milliy_talim_resurslar</a>
      </p><br/>

      <p>
        {t('resurses9')} <a href="https://youtube.com/@BMSECURITYGROUP" target="_blank" rel="noopener noreferrer">youtube.com/@BMSECURITYGROUP</a>
      </p><br/>
    </div>
  );
};

export default Resurses;
