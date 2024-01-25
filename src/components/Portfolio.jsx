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
        <img
          src={weatherDashboardImage}
          alt="Weather Dashboard"
          style={{ width: '300px', height: 'auto' }}
        />
        <p>Weather Dashboard</p>
      </div>

      <div className="portfolio-item">
        <img
          src={currencyExchangeImage}
          alt="Currency Exchange"
          style={{ width: '300px', height: 'auto' }}
        />
        <p>Currency Exchange</p>
      </div>

      <div className="portfolio-item">
        <img
          src={incomeExpenseImage}
          alt="Income Expense Tracker"
          style={{ width: '300px', height: 'auto' }}
        />
        <p>Income Expense Tracker</p>
      </div>
    </section>
  );
};

export default Portfolio;
