import React from 'react';

function Resume() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#314d6d', color: '#ffffff', height: '100%' }}>
      <h2 style={{ borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>Front-end Proficiencies</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0' }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
      </ul>
      <h2 style={{ borderBottom: '2px solid #ffffff', paddingBottom: '10px', marginTop: '20px' }}>Back-end Proficiencies</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0' }}>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL, Apollo Server</li>
      </ul>
    </div>
  );
}

export default Resume;
