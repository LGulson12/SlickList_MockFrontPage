// src/components/Welcome.js
import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import '../App.css'

const Features = () => {
  return (
    <div className="page-content">
      <h1>Features</h1>
      <p>Details about our features.</p>
      <section id="feature1">
        <h2>Feature 1</h2>
        <p>Information about feature1. feature1 is super duper cool. Yadadaddada. Information about feature1. feature1 is super duper cool. Yadadaddada. Information about feature1. feature1 is super duper cool. Yadadaddada. Information about feature1. feature1 is super duper cool. Yadadaddada. Information about feature1. feature1 is super duper cool. Yadadaddada. Information about feature1. feature1 is super duper cool. Yadadaddada. </p>
      </section>
      <section id="feature2">
        <h2>Feature 2</h2>
        <p>Information about feature2. feature2 is super duper cool. Yadadaddada. Information about feature2. feature2 is super duper cool. Yadadaddada. Information about feature2. feature2 is super duper cool. Yadadaddada. Information about feature2. feature2 is super duper cool. Yadadaddada. Information about feature2. feature2 is super duper cool. Yadadaddada. Information about feature2. feature2 is super duper cool. Yadadaddada. </p>
        </section>
      <section id="feature3">
        <h2>Feature 3</h2>
        <p>Information about feature3. feature3 is super duper cool. Yadadaddada. Information about feature3. feature3 is super duper cool. Yadadaddada. Information about feature3. feature3 is super duper cool. Yadadaddada. Information about feature3. feature3 is super duper cool. Yadadaddada. Information about feature3. feature3 is super duper cool. Yadadaddada. Information about feature3. feature3 is super duper cool. Yadadaddada. </p>
      </section>
    </div>
  );
};

export default Features;