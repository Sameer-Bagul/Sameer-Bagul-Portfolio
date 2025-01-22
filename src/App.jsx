import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import HomePage from './pages/HomePage';

import AllWork from './pages/AllWork';

const App = () => {
  return (
    <ReactLenis root>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allwork" element={<AllWork />} />
        </Routes>
      </main>
    </ReactLenis>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
