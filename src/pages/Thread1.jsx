import React from 'react';
import fishing2 from './../assets/images/fishing2.jpg';
import { useTranslation } from 'react-i18next';
import '../App.css'

function Thread1() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <strong>{t('phishingWhat')}</strong>
      <br/><br/>

      <div className="image-container">
      <img src={fishing2} alt="fishing" />
</div>

      
      <p><br/>
        {t('phishingText')}
      </p>
      <br/>

      <strong>{t('phishingTypes')}</strong>
      <br/><br/>
      <p>
        <strong>{t('emailPhishing')}:</strong>
        <ul style={{ listStyleType: 'disc' }}>
          {t('emailPhishingDetails', { returnObjects: true }).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </p>
      <br/>

      <p>
        <strong>{t('smishing')}:</strong> {t('smishingDetails')}
      </p>
      <br/>

      <p>
        <strong>{t('vishing')}:</strong> {t('vishingDetails')}
      </p>
      <br/>

      <p>
        <strong>{t('spearPhishing')}:</strong> {t('spearPhishingDetails')}
      </p>
      <br/>

      <strong>{t('phishingMethods')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('phishingMethodsDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('defensePhishing')}</strong>
      <br/><br/>
      <ul style={{ listStyleType: 'disc' }}>
        {t('defenseStrategiesDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('phishingPrevention')}</strong>
      <br/><br/>
      <ul style={{ listStyleType: 'disc' }}>
        {t('phishingPreventionDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

        <p>{t('centeredText')}</p>
    
      <br/>
    </div>
  );
}

export default Thread1;
