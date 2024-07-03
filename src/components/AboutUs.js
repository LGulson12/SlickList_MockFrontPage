// src/components/AboutUs.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'

const AboutUs = () => {
  return (
    <div className="page-content">
      <h1>About Us</h1>
      <section id="history">
        <h2>History</h2>
        <p>Information about the company. SlickList is super duper cool. Yadadaddada. Information about the company. SlickList is super duper cool. Yadadaddada. Information about the company. SlickList is super duper cool. Yadadaddada. Information about the company. SlickList is super duper cool. Yadadaddada. Information about the company. SlickList is super duper cool. Yadadaddada. </p>
      </section>
      <section id="team">
        <h2>Team</h2>
        <p>Information about the team SlickList has a super duper cool team. Yadadadada. Information about the team SlickList has a super duper cool team. Yadadadada. Information about the team SlickList has a super duper cool team. Yadadadada. Information about the team SlickList has a super duper cool team. Yadadadada. Information about the team SlickList has a super duper cool team. Yadadadada. </p>
      </section>
      <section id="mission">
        <h2>Mission</h2>
        <p>Information about the mission. SlickList has a super duper cool mission. Yadadadadada. Information about the mission. SlickList has a super duper cool mission. Yadadadadada. Information about the mission. SlickList has a super duper cool mission. Yadadadadada. Information about the mission. SlickList has a super duper cool mission. Yadadadadada. Information about the mission. SlickList has a super duper cool mission. Yadadadadada. </p>
      </section>
    </div>
  );
};

export default AboutUs;