import React, { useState } from 'react';
import Button from './components/Button';
import VideoStream from './components/VideoStream';
import Services from './components/Services';
import About from './components/About';
import OurTeam from './components/OurTeam';
import WhyUs from './components/WhyUs';
import InfoSection from './components/InfoSection';
import ImagePrediction from './components/ImagePrediction';
import ChatBot from './components/ChatBot';
const App = () => {
  const [showStream, setShowStream] = useState(false);

  const handleToggleStream = () => {
    setShowStream(prevState => !prevState);
  };

  return (
    <div>
      <Button onClick={handleToggleStream} isStreaming={showStream} />
      {showStream && <VideoStream />}
      <ImagePrediction />
    
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="team">
      
      </section>
      <section id="info">
        <InfoSection />
      </section>
      <ChatBot />
    </div>
  );
};

export default App;
