import React from 'react';

// Import images
import weatherDashboardImage from '../assets/Weather-dashboard.png';
import currencyExchangeImage from '../assets/Currency-Exchange.png';
import incomeExpenseImage from '../assets/Income-Expense-tracker.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-item">
        <a href="https://vairavan-ven.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
          <img
            src={weatherDashboardImage}
            alt="Weather Dashboard"
            style={{ width: '300px', height: 'auto' }}
          />
        </a>
        <p>Weather Dashboard</p>
      </div>

      <div className="portfolio-item">
        <a href="https://amethystlyre.github.io/Currency-Exchange-project/" target="_blank" rel="noopener noreferrer">
          <img
            src={currencyExchangeImage}
            alt="Currency Exchange"
            style={{ width: '300px', height: 'auto' }}
          />
        </a>
        <p>Currency Exchange</p>
      </div>

      <div className="portfolio-item">
        <a href="https://github.com/dyl124/xinc-income-expense-tracker" target="_blank" rel="noopener noreferrer">
          <img
            src={incomeExpenseImage}
            alt="Income Expense Tracker"
            style={{ width: '300px', height: 'auto' }}
          />
        </a>
        <p>Income Expense Tracker</p>
      </div>
    </section>
  );
};

export default Portfolio;
