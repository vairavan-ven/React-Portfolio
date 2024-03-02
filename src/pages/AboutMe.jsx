import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-card" style={{ marginTop: '70px' }}>
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>
              Hello Everyone! My name is Vairavan, I have recently completed an intensive 6 month web development bootcamp and am also a current university student studying the Bachelor of Information Technology. Welcome to my Portfolio, here you will be able to take a look at some of my work. Don't hesitate to get in touch with me if you have any questions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
