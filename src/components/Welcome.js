// // src/components/Welcome.js
// import React from 'react';

// const Welcome = () => {
//   return (
//     <div>
//       <h1>Welcome to Our Company</h1>
//       <p>Some welcome message.</p>
//     </div>
//   );
// };

// export default Welcome;

import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-header d-flex justify-content-between align-items-center">
        <h1 className="welcome-title">Welcome</h1>
        {/* <p>Welcome text goes here. SlickList is a supply chain portal for dental offices, etc.</p> */}
        <img src="/images/SlickList.png" alt="Logo" className="welcome-logo" />
      </div>
      <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/nyc.jpg" className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/uae.jpg" className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/scottish.jpg" className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#welcomeCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#welcomeCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Welcome;