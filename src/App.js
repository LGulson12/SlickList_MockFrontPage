// src/App.js
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedLogo from './components/AnimatedLogo';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<Welcome />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/get-started" element={<GetStarted />} />
              </Routes>
              {showTopButton && (
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        Top
                    </button>
              )}
            <Footer />
          </div>
      </Router>
  );
}

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Welcome />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/get-started" element={<GetStarted />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

export default App;