// DownloadResources.js
import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  text-align: center;
`;

const ResourcesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ResourceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ResourceItem = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const DownloadResources = () => {
  return (
    <ResourcesContainer id="resources">
      <ResourcesTitle>Download My Resources</ResourcesTitle>
      <ResourceList>
        <ResourceItem href="Resume.pdf" download="Aabid_Resume.pdf">
          Download Resume
        </ResourceItem>
       
        {/* Add more resources as needed */}
      </ResourceList>
    </ResourcesContainer>
  );
};

export default DownloadResources;
