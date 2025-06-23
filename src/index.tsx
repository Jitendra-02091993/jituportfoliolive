import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS with custom settings
AOS.init({
  duration: 800,        // Animation duration in ms
  easing: 'ease-in-out', // Easing function
  once: true,           // Whether animation should happen only once
  offset: 50,           // Offset (in px) from the original trigger point
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
