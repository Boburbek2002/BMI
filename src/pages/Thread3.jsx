import React from 'react';
import ddos from './../assets/images/ddos.jpg';
import { useTranslation } from 'react-i18next';
import '../App.css'

function Thread3() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <strong>{t('DoSDDoSTitle')}</strong>
      <br/><br/>
      <div className="image-container">
      <img src={ddos} alt="ddos" />
</div>
      
      <p><br/>
        {t('DoSDDoSText')}
      </p>
      <br/>

      <strong>{t('DoSDDoSEffect')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('DoSDDoSEffectPoints', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('DoSDDoSDefense')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('DoSDDoSDefensePoints', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('DoSDDoSDefenseTools')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('DoSDDoSDefenseToolsPoints', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('DosDDosDefenseDifficult')}</strong>
      <p>
        {t('DosDDosDefenseConstantly')}
      </p>
      <ul style={{ listStyleType: 'disc' }}>
        {t('DosDDosDefenseTactics', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>
    </div>
  );
}

export default Thread3;
