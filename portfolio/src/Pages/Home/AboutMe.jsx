import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="container" id="AboutMe">
      <header className="header">
        <h2>About me</h2>
      </header>
      <section className="content">
        <div className="side-images left">
          <img src="./img/book_logo.png" alt="Books" className="animated-image" />
          <img src="./img/explore_logo.png" alt="Travel" className="animated-image" />
        </div>
        <div className="essay">
          <p> 
          Hello! I've always been captivated by the limitless potential of technology and the transformative power of education. My journey is driven by an insatiable curiosity and a desire to make a meaningful impact in the world. I wholeheartedly embrace lifelong learning, believing that both education and technology are essential to creating a brighter future for everyone.
         </p>
         <p> Beyond my professional pursuits, I have a passion for sports and the thrill of competition. I'm also an avid traveler, enchanted by the allure of new places and diverse cultures. Whether it's hiking through breathtaking landscapes or uncovering the hidden gems of vibrant cities, I find immense joy in exploring the world's beauty and richness.
        In addition to my love for travel and sports, I am an enthusiastic reader of non-fiction books. I enjoy delving into real-life stories and gaining insights from diverse perspectives, which fuel my curiosity and drive for continuous learning.
        </p>
           
         </div>
        <div className="side-images right">
          <img src="./img/sports_logo.png" alt="Technology" className="animated-image" />
          <img src="./img/movies_logo.jpg" alt="Movies" className="animated-image" />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
