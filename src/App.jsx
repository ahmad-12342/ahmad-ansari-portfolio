import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LanguageSwitcher from './components/LanguageSwitcher';
import Translator from './components/Translator';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Process from './components/Process';
import SocialFeed from './components/SocialFeed';
import Preloader from './components/Preloader';
import './i18n/config';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const [activeWidget, setActiveWidget] = React.useState(null); // 'chat' or 'lang'

  return (
    <div className="bg-gradient-mesh min-h-screen selection:bg-primary-500/30">
      <CustomCursor />
      {!isAuthPage && <Navbar />}

      {children}

      {!isAuthPage && <Footer />}
      {!isAuthPage && (
        <>
          <WhatsAppButton />
          <Translator
            isOpen={activeWidget === 'trans'}
            setIsOpen={(val) => setActiveWidget(val ? 'trans' : null)}
          />
          <LanguageSwitcher
            isOpen={activeWidget === 'lang'}
            setIsOpen={(val) => setActiveWidget(val ? 'lang' : null)}
          />
          <Chatbot
            isOpen={activeWidget === 'chat'}
            setIsOpen={(val) => setActiveWidget(val ? 'chat' : null)}
          />
        </>
      )}
    </div>
  );
};

const Home = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Process />
    <Pricing />
    <Skills />
    <Projects />
    <Achievements />
    <Experience />
    <Blog />
    <Testimonials />
    <SocialFeed />

    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <Preloader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
