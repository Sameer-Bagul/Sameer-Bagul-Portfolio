import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';   
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllWork from './pages/Allwork'; // Import the All Work page

import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, [location.pathname]); // Re-run the animation when the location changes

  return (
    <ReactLenis root>
      {location.pathname !== '/allwork' && <Header />} {/* Hide Header on All Work page */}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Work />
              {/* <Review /> */}
              <Contact />
            </>
          } />
          <Route path="/allwork" element={<AllWork />} /> {/* Define the All Work route */}
        </Routes>
      </main>
      {location.pathname !== '/allwork' && <Footer />} {/* Hide Footer on All Work page */}
    </ReactLenis>
  );
}

// Wrap App component in Router
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
