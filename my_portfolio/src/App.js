import Home from './Components/Home.js'
import './App.css';
import Navbar from "./Components/Navbar.js";
import About from './Components/About.js';
import Project from './Components/Project.js';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer.js';
import { FaChevronUp } from 'react-icons/fa'

const socialLinks = {
  github: 'https://github.com/Haneef4128/',
  linkedin: 'https://www.linkedin.com/in/mohammed-haneef-177526223/',
  facebook: 'https://www.facebook.com/mohammed.haneef.984/',
  instagram: 'https://www.instagram.com/md_haneef_2002/',
  twitter: '',
  email: 'mailto:mdhaneef2001@gmail.com',
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the visibility of the arrow icon based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set the threshold for when the arrow should appear (e.g., scroll 200px)
      if (window.scrollY > 200) {
        setIsVisible(true); // Show the arrow if scrolled down a little
      } else {
        setIsVisible(false); // Hide the arrow if close to the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Footer socialLinks={socialLinks} />
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaChevronUp size={25} />
        </div>
      )}
    </div>
  );
}

export default App;
