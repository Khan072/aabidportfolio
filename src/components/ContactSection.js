// ContactSection.js
import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm'; // Import the ContactForm component
import myPicture from '../Contact-.png'; 

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ContactContent = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ContactImage = styled.img`
  flex: 1;
  height:400px;
  max-width: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <h2>Contact Me</h2>
        <p>
          If you have any questions or just want to get in touch, feel free to
          contact me using the form below.
        </p>
        <ContactForm /> {/* Include the ContactForm component here */}
      </ContactContent>
      <ContactImage src={myPicture} alt="Contact" />
    </ContactContainer>
  );
};

export default ContactSection;
