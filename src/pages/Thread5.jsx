import React from 'react';
import '../App.css';
import sql2 from './../assets/images/sql2.jpg';
import { useTranslation } from 'react-i18next';

const Thread5 = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <strong>
        {t('sqlInjection.title')}
      </strong><br/><br/>

     
      <div className="image-container">
      <img src={sql2} alt="sql2" /><br/><br/>
</div>

      <p>
        {t('sqlInjection.description')}
      </p><br />

      <strong>
        {t('sqlInjection.howItWorks')}
      </strong><br/><br/>

      <ul style={{ listStyleType: 'number' }}>
        {t('sqlInjection.steps', { returnObjects: true }).map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul><br/>

      <strong>
        {t('sqlInjection.types')}
      </strong><br/><br/>
      <ul style={{ listStyleType: 'disc' }}>
        <li>{t('sqlInjection.inBand')}</li>
        <li>{t('sqlInjection.errorBased')}</li>
        <li>{t('sqlInjection.unionBased')}</li>
        <li>{t('sqlInjection.outOfBand')}</li>
        <li>{t('sqlInjection.blind')}</li>
      </ul><br/>

      <strong>
        {t('sqlInjection.implementation')}
      </strong><br/><br/>
      <p>
        {t('sqlInjection.implementationDescription')}
      </p>
      {t('sqlInjection.stepsDetailed', { returnObjects: true }).map((detail, index) => (
        <div key={index}>
          <strong>{detail.title}</strong>
          <ul>
            {detail.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
      <br/>

      <strong>
        {t('sqlInjection.prevention.title')}
      </strong><br/><br/>
      {t('sqlInjection.prevention.steps', { returnObjects: true }).map((step, index) => (
        <div key={index}>
          <strong>{step.title}</strong>
          <ul>
            {step.steps.map((subStep, idx) => (
              <li key={idx}>{subStep}</li>
            ))}
          </ul>
        </div>
      ))}
      <p>{t('sqlInjection.prevention.conclusion')}</p><br/>
    </div>
  );
}

export default Thread5;
