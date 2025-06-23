import React, { useEffect } from 'react';
import AOS from 'aos';
import Resume from './Resume';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true,      // run only once on scroll
    });
  }, []);

  return (
    <>
      <Resume />
      <ScrollToTop />
    </>
  );
};

export default App;
