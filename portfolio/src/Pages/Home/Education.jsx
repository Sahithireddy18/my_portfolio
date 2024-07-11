import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section className="education--section" id="education">
      <h2 className="sections--heading">Education</h2>
      <div className="education--section--container">
        <div className="education--section--card">
          <div className="education--section--card--content">
            <h3>Master of Science in Computer Science, 2021-2023</h3>
            <h2>University of Maryland Baltimore County</h2>
          </div>
          <img src="./img/umbc_logo.png" alt="UMBC Logo" className="education--logo" />
        </div>

        <div className="education--section--card">
          <div className="education--section--card--content">
            <h3>Bachelor of Engineering in Computer Science, 2015-2019</h3>
            <h2>Chaitanya Bharathi Institute of Technology</h2>
          </div>
          <img src="./img/cbit_logo.png" alt="CBIT Logo" className="education--logo" />
        </div>
      </div>
    </section>
  );
}
