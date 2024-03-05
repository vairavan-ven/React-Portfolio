// AboutMe.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import githubPfp from '../assets/github-pfp.jpeg';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-card" style={{ marginTop: '70px', backgroundColor: '#314d6d', color: '#ffffff', padding: '40px 20px' }}>
      <Container>
        <Row>
          <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={githubPfp} alt="GitHub Profile" style={{ width: '80%', borderRadius: '50%' }} />
          </Col>
          <Col md={8}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '20px', borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>About Me</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Hello everyone! My name is Vairavan. I recently completed an intensive 6-month web development bootcamp and am currently pursuing a Bachelor of Information Technology degree at university. Welcome to my portfolio, where you can explore some of my work. Feel free to reach out to me if you have any questions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
