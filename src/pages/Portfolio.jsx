import React from 'react';

// Import images
import weatherDashboardImage from '../assets/Weather-dashboard.png';
import currencyExchangeImage from '../assets/Currency-Exchange.png';
import incomeExpenseImage from '../assets/Income-Expense-tracker.png';
import AniTrackImage from '../assets/AniTrack.png';
import notetakerImage from '../assets/notetaker.png';
import pwgeneratorImage from '../assets/pwgenerator.png';
import texteditorImage from '../assets/texteditor.png';

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ backgroundColor: '#314d6d', color: '#ffffff', padding: '40px 20px' }}>
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '40px', borderBottom: '2px solid #ffffff', paddingBottom: '20px' }}>Portfolio</h2>

      <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', justifyContent: 'center' }}>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://vairavan-ven.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
            <img
              src={weatherDashboardImage}
              alt="Weather Dashboard"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Weather Dashboard</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://amethystlyre.github.io/Currency-Exchange-project/" target="_blank" rel="noopener noreferrer">
            <img
              src={currencyExchangeImage}
              alt="Currency Exchange"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Currency Exchange</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://github.com/dyl124/xinc-income-expense-tracker" target="_blank" rel="noopener noreferrer">
            <img
              src={incomeExpenseImage}
              alt="Income Expense Tracker"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Income Expense Tracker</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://powerful-escarpment-36215-b12952e42c2d.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={AniTrackImage}
              alt="AniTrack"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>AniTrack</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://note-taker-vairavan-a592b0255402.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={notetakerImage}
              alt="Note Taker"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Note Taker</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://vairavan-ven.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
            <img
              src={pwgeneratorImage}
              alt="Password Generator"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Password Generator</p>
        </div>

        <div className="portfolio-item" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', textAlign: 'center' }}>
          <a href="https://just-another-text-editor-pwa-1-116f8c7e0445.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={texteditorImage}
              alt="Text Editor"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
          </a>
          <p style={{ padding: '10px 0', margin: '0' }}>Text Editor</p>
        </div>

      </div>
    </section>
  );
};


export default Portfolio;
