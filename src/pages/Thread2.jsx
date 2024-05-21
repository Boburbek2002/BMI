import React from 'react';
import ransomware2 from './../assets/images/ransomware2.jpg';
import { useTranslation } from 'react-i18next';
import '../App.css'

const Thread2 = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>

      <strong>
        {t('ransomwareWhat')}
      </strong>
      <br/><br/>
      <div className="image-container">
      <img src={ransomware2} alt="ransomware" /><br/><br/>
</div>
      
      <p>
        {t('ransomwareText')}
      </p>
      <br/>
      
      <strong>
        {t('ransomwareTypes')}
      </strong>
      <p>
        <ul style={{ listStyleType: 'disc' }}>
          <li>{t('cryptoRansomware')}: {t('cryptoRansomwareDetails')}</li>
          <li>{t('lockerRansomware')}: {t('lockerRansomwareDetails')}</li>
          <li>{t('doxwareLeakware')}: {t('doxwareLeakwareDetails')}</li>
          <li>{t('ransomwareAsAService')}: {t('ransomwareAsAServiceDetails')}</li>
        </ul>
      </p>
      <br/>
      
      <strong>
        {t('ransomwarePrinciple')}
      </strong>
      <br/>
      <p>
        {t('ransomwarePrincipleDetails')}
      </p>
      <br/>
      
      <p>

      <ul style={{ listStyleType: 'disc' }}>
        <li>{t('phishingEmails')}</li>
        <li>{t('exploitingSoftwareVulnerabilities')}</li>
        <li>{t('maliciousWebsites')}</li>
        <li>{t('maliciousAdvertisements')}</li>
        <li>{t('socialEngineering')}</li>
      </ul>

      </p>
      <br/>
      
      <strong>
        {t('defenseRansomware')}
      </strong>

      <ul style={{ listStyleType: 'disc' }}>
        <li>
          {t('regularBackups')}: {t('regularBackupsDetails')}
        </li>
        <li>
          {t('updateSoftware')}: {t('updateSoftwareDetails')}
        </li>
        <li>
          {t('avoidSuspiciousEmails')}: {t('avoidSuspiciousEmailsDetails')}
        </li>
        <li>
          {t('useSecuritySoftware')}: {t('useSecuritySoftwareDetails')}
        </li>
        <li>
          {t('useCautionWithUSBDrives')}: {t('useCautionWithUSBDrivesDetails')}
        </li>
        <li>
          {t('downloadOnlyFromTrustedSources')}: {t('downloadOnlyFromTrustedSourcesDetails')}
        </li>
        <li>
          {t('useVPNOnPublicWiFi')}: {t('useVPNOnPublicWiFiDetails')}
        </li>
        <li>
          {t('guardAgainstDataLeakage')}: {t('guardAgainstDataLeakageDetails')}
        </li>
        <li>
          {t('avoidClickingUnsafeLinks')}: {t('avoidClickingUnsafeLinksDetails')}
        </li>
      </ul>
      
     
     <strong>
       {t('strengthenDefenseDifficult')}
     </strong>
     
      <p>
      {t('strengthenDefenseConstantly')}
      </p>
      <br/>
      
      <p>
      {t('strengthenDefenseAwareness')}
      </p>
      <br/>
      
      <strong>
      {t('additionalConsiderations')}
      </strong>

      <p>

      <ul style={{ listStyleType: 'disc' }}>
        <li>
        {t('additionalConsiderationsTips.ImportanceOfIncidentResponsePlans')}: 
        </li>
        <li>
        {t('additionalConsiderationsTips.ReportingToLawEnforcement')}: 
        </li>
      </ul>

      </p>
      <br/>

    </div>
  );
}

export default Thread2;
