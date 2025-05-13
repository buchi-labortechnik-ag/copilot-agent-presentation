import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './components/Slide';
import { slidesData } from './slidesData';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Slide key={currentSlide} {...slidesData[currentSlide]} />
      </AnimatePresence>
      <div className="navigation-buttons">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
        <button onClick={nextSlide} disabled={currentSlide === slidesData.length - 1}>Next</button>
      </div>
      <div className="slide-counter">
        {currentSlide + 1} / {slidesData.length}
      </div>
    </div>
  );
}

export default App;
