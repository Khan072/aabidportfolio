import React from 'react';
import styled from 'styled-components';
import myPicture1 from '../project1.jpg'; 
import myPicture2 from '../project2.jpg'; 
import myPicture3 from '../project3.jpg'; 

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1;
  min-width: 300px;
  max-width: 32%;
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectGrid>
        <ProjectCard>
          <ProjectImage src={myPicture1} alt="Project 1" />
          <ProjectTitle>Calculator App</ProjectTitle>
          <ProjectDescription>
          Welcome to Calculate Me app, your reliable and efficient tool for all your mathematical needs. Whether you’re performing basic arithmetic operations or complex calculations, our app is designed to make problem-solving faster and easier.
          </ProjectDescription>
          <ProjectButton href="https://aabidcalculator.netlify.app/">View Details</ProjectButton>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={myPicture3} alt="Project 2" />
          <ProjectTitle>Physiotherapy website</ProjectTitle>
          <ProjectDescription>
          Welcome to Physiotherapy website, where we are dedicated to improving your health and well-being through personalized physiotherapy care. With a team of experienced and licensed physiotherapists, we offer comprehensive treatments designed to alleviate pain, restore mobility, and enhance physical function.
          </ProjectDescription>
          <ProjectButton href="https://khan072.github.io/Physiotherapy-website/#">View Details</ProjectButton>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={myPicture2} alt="Project 3" />
          <ProjectTitle>NewMug </ProjectTitle>
          <ProjectDescription>
          Stay informed with NewsMug, your go-to source for the latest news and updates from around the world. Whether you’re interested in politics, technology, sports, or entertainment, NewsMug brings you real-time news from trusted sources, all in one place.
          </ProjectDescription>
          <ProjectButton href="#project3-details">View Details</ProjectButton>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
