import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/public/Home';
import PayIn from './pages/public/PayIn';
import Payout from './pages/public/Payout';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Faq from './pages/public/Faq';
import Support from './pages/public/Support';
import PrivacyPolicy from './pages/public/PrivacyPolicy';
import Terms from './pages/public/Terms';

import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import TopBarLoader from './components/TopBarLoader';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBarLoader />
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pay-in" element={<PayIn />} />
          <Route path="/payout" element={<Payout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<Terms />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
