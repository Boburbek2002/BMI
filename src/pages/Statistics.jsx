import { Container } from "reactstrap";
import ransomstatistics from './../assets/images/ransomstatistics.jpg'
import ransomstatistics2 from './../assets/images/ransomstatistics2.jpg'
import ddosstatistics from './../assets/images/ddosstatistics.png'
import iotstatistics from './../assets/images/iotstatistics.png'
import iotstatistics2 from './../assets/images/iotstatistics2.png'
import crimeprice from './../assets/images/crimeprice.png'
import fishing2 from './../assets/images/crimeprice.png'
import '../App.css'
import { useTranslation } from 'react-i18next';


const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="statistics">
      <Container>
        <br/>
        <strong>{t('statistics.title')}</strong>
        <br/><br/>

        {t('statistics.points', { returnObjects: true }).map((point, index) => (
          <li key={index}>{point}</li>
        ))}<br/>

        <strong>{t('statistics.ransomware.title')}</strong>
        <br/><br/>
        <p>{t('statistics.ransomware.intro')}</p>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.ransomware.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        <div className="image-container">
          <img src={ransomstatistics} alt="ransomstatistics" />
        </div>
        <center>{t('statistics.ransomware.quarterlyPayments')}</center>
        <br/>
        <p>{t('statistics.ransomware.impact')}</p>
        <div className="image-container">
          <img src={ransomstatistics2} alt="ransomstatistics2" />
        </div>
        <center>{t('statistics.ransomware.countriesAffected')}</center>
        <br/>

        <strong>{t('statistics.ddos.title')}</strong>
        <br/><br/>
        <div className="image-container">
          <img src={ddosstatistics} alt="ddosstatistics" />
        </div>
        <p>{t('statistics.ddos.intro')}</p>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.ddos.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <strong>{t('statistics.phishing.title')}</strong>
        <br/><br/>
        <p>{t('statistics.phishing.intro')}</p>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.phishing.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="image-container">
          <img src={fishing2} alt="fishing" />
        </div>

        <strong>{t('statistics.physicalThreats.title')}</strong>
        <br/><br/>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.physicalThreats.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <strong>{t('statistics.iot_attacks.title')}</strong>
        <br/><br/>
        <p>{t('statistics.iot_attacks.description')}</p>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.iot_attacks.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="image-container">
          <img src={iotstatistics} alt="iotstatistics" />
        </div>
        <ul style={{ listStyleType: 'disc' }}>
          {t('statistics.iot_attacks.additional_points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="image-container">
          <img src={iotstatistics2} alt="iotstatistics2" />
        </div>

        <strong>{t('statistics.cybercrime_costs.title')}</strong>
        <br/><br/>
        <p>{t('statistics.cybercrime_costs.description_1')}</p>
        <div className="image-container">
          <img src={crimeprice} alt="crimeprice" />
        </div>
        <center>{t('statistics.cybercrime_costs.image_caption')}</center>
        <br/>
        <p>{t('statistics.cybercrime_costs.description_2')}</p>
        <br/>

      </Container>
    </div>
  );
};

export default Statistics;
