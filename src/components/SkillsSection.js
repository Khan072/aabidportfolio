import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const SkillsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 10px;
  width: ${props => props.level || '0%'};
  background-color: #333;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
`;

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SkillsTitle>My Skills</SkillsTitle>
        <SkillItem>
          <SkillName>HTML</SkillName>
          <ProgressBar>
            <Progress level="90%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>CSS</SkillName>
          <ProgressBar>
            <Progress level="85%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>JavaScript</SkillName>
          <ProgressBar>
            <Progress level="80%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>React.js</SkillName>
          <ProgressBar>
            <Progress level="75%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>Node.js</SkillName>
          <ProgressBar>
            <Progress level="70%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>C++</SkillName>
          <ProgressBar>
            <Progress level="90%" />
          </ProgressBar>
        </SkillItem>
        <SkillItem>
          <SkillName>PHP</SkillName>
          <ProgressBar>
            <Progress level="70%" />
          </ProgressBar>
        </SkillItem>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default SkillsSection;
