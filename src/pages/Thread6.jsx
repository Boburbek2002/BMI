import React from 'react';
import '../App.css';
import zeroday2 from './../assets/images/zeroday2.jpg';
import { useTranslation } from 'react-i18next';

const Thread6 = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <strong>
        {t('zeroDayAttack.title')}
      </strong><br/><br/>
<div className="image-container">
<img src={zeroday2} alt="zeroday2" /><br/><br/>
</div>
      

      <p>
        {t('zeroDayAttack.description')}
      </p><br/>

      <strong>
        {t('zeroDayAttack.mainAspects')}
      </strong><br/><br/>

      <ul style={{ listStyleType: 'disc' }}>
        {t('zeroDayAttack.aspectsList', { returnObjects: true }).map((aspect, index) => (
          <li key={index}>{aspect}</li>
        ))}
      </ul><br/>

      <strong>
        {t('zeroDayAttack.howItWorks')}
      </strong><br/><br/>

      <ul style={{ listStyleType: 'disc' }}>
        {t('zeroDayAttack.howItWorksSteps', { returnObjects: true }).map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul><br/>

      <strong>
        {t('zeroDayAttack.impact')}
      </strong><br/><br/>

      <ul style={{ listStyleType: 'disc' }}>
        {t('zeroDayAttack.impactList', { returnObjects: true }).map((impact, index) => (
          <li key={index}>{impact}</li>
        ))}
      </ul><br/>

      <strong>
        {t('zeroDayProtection.title')}
      </strong><br/><br/>

      <p>
        {t('zeroDayProtection.stepsDescription')}
      </p>

      <ul style={{ listStyleType: 'disc' }}>
        {t('zeroDayProtection.steps', { returnObjects: true }).map((step, index) => (
          <li key={index}>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>

      <p>{t('zeroDayProtection.additionalAdvice')}</p>

      <ul style={{ listStyleType: 'disc' }}>
        {t('zeroDayProtection.additionalSteps', { returnObjects: true }).map((step, index) => (
          <li key={index}>
            {step}
          </li>
        ))}
      </ul>

      <p>{t('zeroDayProtection.conclusion')}</p><br/>
    </div>
  );
}

export default Thread6;
