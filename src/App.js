// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import DownloadResources from './components/DownloadResources';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget'; // Import the ChatWidget
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection/>
      <DownloadResources />
      <ContactSection />
      <ChatWidget /> {/* Include the ChatWidget component */}
      <Footer />
    </>
  );
};

export default App;
