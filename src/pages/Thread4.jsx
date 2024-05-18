import React from 'react';
import mitm2 from './../assets/images/mitm2.jpg';
import { useTranslation } from 'react-i18next';
import '../App.css'

function Thread4() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <strong>{t('mitmTitle')}</strong>
      <br/><br/>

      <div><img src={mitm2} alt="mitm2" /></div>
      <br/>
      <p><br/>
        {t('mitmText')}
      </p>
      <br/>

      <strong>{t('mitmMethods')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('mitmMethodsDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('mitmTypes')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('mitmTypesDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('mitmImpact')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('mitmImpactDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('mitmProtectionTitle')}</strong>
      <p><br/>
        {t('mitmProtectionText')}
      </p>
      <br/>

      <strong>{t('secureConnectionAdvantage')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('secureConnectionAdvantageDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('strongAuthenticationMeasures')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('strongAuthenticationMeasuresDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('securitySoftwareAndAwareness')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('securitySoftwareAndAwarenessDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <strong>{t('additionalRecommendations')}</strong>
      <ul style={{ listStyleType: 'disc' }}>
        {t('additionalRecommendationsDetails', { returnObjects: true }).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <br/>

      <p>
        {t('mitmProtectionConclusion')}
      </p>
      <br/>
    </div>
  );
}

export default Thread4;
