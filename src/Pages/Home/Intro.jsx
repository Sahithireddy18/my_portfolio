import React from 'react';
import './Intro.css';
import Typical from 'react-typical';

export default function Introduction() {
  return (
    <section id="introSection" className="intro--section">
      <div className="intro--section--content--box">
        <div className="intro--section--content">
          <p className="section--title">Hey, I'm Sahithi Reddy</p>
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
          
         
         <Typical
              steps={[
                " 'Engineering is the closest thing to magic that exists in the world. - Elon Musk'",
                 1000,
                ]}
              loop={Infinity}
              wrapper="span"
              className="intro--section-title--color--grey"
            />
          </p>
          <p> My journey into engineering is driven by a mindset of innovation, creativity, and the relentless pursuit of excellence. Engineering, to me, is about seeing the world as it could be and bridging that gap through technology. Beyond coding, I cherish collaborating with others, mentoring aspiring developers, and sharing knowledge. I believe in the power of community and continuous learning. As a Software Engineer, my mission is to create solutions that matter, inspire others to see their potential, and push the boundaries of what we can achieve.</p>
          
        </div>
      </div>
      <div className="intro--section--img">
        <img src="./img/my_pic.jpg" alt="Intro Section" />
      </div>
     
    </section>
  );
}
