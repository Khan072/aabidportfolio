import React from 'react';
import styled from 'styled-components';
import myPicture from '../picture.jpeg'; // Ensure this path is correct

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Hello, I'm Aabid</HeroTitle>
        <HeroSubtitle>I'm a Web Developer passionate about creating beautiful and functional websites.</HeroSubtitle>
        <HeroButton href="#contact">Get in Touch</HeroButton>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src={myPicture} alt="Aabid" />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
