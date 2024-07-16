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
          Hello there! I'm a passionate Software Developer with extensive hands-on experience across a diverse range of technologies.
 
          Driven by curiosity and a mission to push technological boundaries, I create innovative solutions that make a real difference in the world. I believe in the transformative power of technology to solve problems, improve lives, and create lasting impact.

With a commitment to meaningful innovation, I dedicate myself to developing tech that truly matters and giving my best to every solution I create.

          </p>
        </div>
      </div>
      <div className="intro--section--img">
        <img src="./img/my_pic.jpg" alt="Intro Section" />
      </div>
    </section>
  );
}
