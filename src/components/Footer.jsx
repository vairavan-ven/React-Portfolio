import React from 'react';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', backgroundColor: '#314d6d', padding: '20px', textAlign: 'center', borderTop: '1px solid #ffffff' }}>
      <p style={{ margin: '0', color: '#ffffff' }}>
        <a href="https://github.com/vairavan-ven" style={{ textDecoration: 'none', color: '#b3cde0' }}>
          Find me on GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
