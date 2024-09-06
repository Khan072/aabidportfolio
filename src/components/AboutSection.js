import React from 'react';
import styled from 'styled-components';
import myPicture from '../svgimage.png'; // Ensure this path is correct

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const AboutContent = styled.div`
  flex: 1;
  padding: 1rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src={myPicture} alt="Aabid" />
      </AboutImageContainer>
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I am a passionate web developer with a love for creating stunning and functional websites.
          My goal is to help bring your ideas to life on the web. With a strong foundation in 
          computer science and a keen eye for design, I specialize in building responsive, user-friendly 
          websites that not only look great but also perform seamlessly across all devices.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
