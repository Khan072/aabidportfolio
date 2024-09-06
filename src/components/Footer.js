import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const SocialMediaContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff5722;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</FooterText>
      
      <SocialMediaContainer>
        <SocialLink href="https://www.instagram.com/aabid072/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="hhttps://www.facebook.com/aabid" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/aabid-khan-402666216/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialLink>
        <SocialLink href="https://github.com/Khan072" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
