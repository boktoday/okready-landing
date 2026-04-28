import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Curriculum from './components/Curriculum';
import Antifragile from './components/Antifragile';
import Pricing from './components/Pricing';
import Coaching from './components/Coaching';
import TeensWorkshop from './components/TeensWorkshop';
import ChatBot from './components/ChatBot';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimers from './pages/Disclaimers';
import Security from './pages/Security';

function LandingPage() {
  const waitlistRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar onJoinClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Hero onJoinClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Pillars />
      <Curriculum />
      <Antifragile />
      <Pricing onJoinClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Coaching onJoinClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <TeensWorkshop onRegisterClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <div ref={waitlistRef}>
        <Waitlist />
      </div>
      <Footer />
      <ChatBot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-[100dvh] overflow-hidden">
        <div className="grain-overlay" />
        <div className="fixed top-[-50vh] left-[-20vw] w-[70vw] h-[70vh] bg-earth-800/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-30vh] right-[-10vw] w-[50vw] h-[50vh] bg-amber-800/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
