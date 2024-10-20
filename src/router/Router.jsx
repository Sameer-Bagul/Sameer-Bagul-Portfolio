import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from '../components/Work';
import AllWork from '../pages/AllWork';
import About from '../components/About';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/allwork" element={<AllWork />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

