import Blog from './components/Blog';
import CreativeAgency from './components/CreativeAgency';
import CreativeSolutions from './components/CreativeSolutions';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Sponsors from './components/Sponsors';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';
import Tracker from './components/Tracker';
import WhoWeAre from './components/WhoWeAre';
import ScrollUp from './components/ScrollUp';
import SidePanel from './components/SidePanel';
import ChatPanel from './components/ChatPanel';
import { useEffect, useState } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });
  const [isOverSlider, setIsOverSlider] = useState(false);

  useEffect(() => {
    const checkMousePos = (e: MouseEvent) => {
      requestAnimationFrame(() =>
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };
    window.addEventListener('mousemove', checkMousePos);

    return () => window.removeEventListener('mousemove', checkMousePos);
  }, []);

  return (
    <>
      <Tracker mousePosition={mousePosition} isOverSlider={isOverSlider} />
      <Header />
      <Hero />
      <CreativeAgency />
      <CreativeSolutions />
      <Slider setIsOverSlider={setIsOverSlider} />
      <Subscribe />
      <Testimonials setIsOverSlider={setIsOverSlider} />
      <WhoWeAre />
      <Sponsors />
      <Blog setIsOverSlider={setIsOverSlider} />
      <Footer />
      <ScrollUp />
      <SidePanel />
      <ChatPanel />
    </>
  );
}

export default App;
