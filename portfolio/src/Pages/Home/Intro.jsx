import React from 'react';
import './Intro.css';
import Typical from 'react-typical';

export default function Introduction() {
  return (
    <section id="introSection" className="intro--section">
      <div className="intro--section--content--box">
        <div className="intro--section--content">
          <p className="section--title">Hey, I'm Sahithi</p>
          <h1 className="intro--section--title">

          <Typical
              steps={[
                'Full Stack Developer',
                1000,
                ]}
              loop={Infinity}
              wrapper="span"
              className="intro--section-title--color"
            />
           
          </h1>
          <p className="intro--section-description">
            
            Hey there! I'm a passionate Software Developer with hands-on experience at industry giants like NCR and Walmart. My journey in the tech world has taken me through a diverse landscape of technologies, from the dynamic realms of React, Node.js, Springboot to the structured depths of Java, Python, and C++.
            I’m on a mission to explore, learn, and create, pushing the boundaries of what technology can achieve. I'm all about making tech that truly matters.
          </p>
        </div>
      </div>
      <div className="intro--section--img">
        <img src="./img/my_pic.jpg" alt="Intro Section" />
      </div>
    </section>
  );
}
