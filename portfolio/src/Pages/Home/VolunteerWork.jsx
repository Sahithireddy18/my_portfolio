import React from 'react';
import './VolunteerWork.css';

export default function VolunteerWork() {
  const volunteerExperiences = [
    {
      role: 'Education Support Volunteer',
      organization: 'Make a Difference',
      description: "I've always had a deep desire to give back to society and I had the opportunity to do so as an Education Support Volunteer at 'Make a Difference'. I taught data structures and algorithms to a group of 30 students. This experience was incredibly rewarding, as I was able to share my knowledge and passion for technology with young minds eager to learn. This opportunity not only allowed me to make a meaningful impact on these students educational journeys but also reinforced my commitment to using my skills for the betterment of others.",
      logo: './img/mad_logo.png'
    },
    {
      role: 'Volunteer',
      organization: 'NCR Corporate Social Responsibility',
      description: "As a CSR Volunteer, I had the privilege of working with young children, teaching them basic mathematics and English. This allowed me to ignite the curiosity and foster a love for learning in the young kids. Beyond this, we extended our efforts to include computer training for the non-technical support staff at the organization where we had a chance to empower them with essential digital skills. This journey was immensely fulfilling, as it enabled me to make a tangible difference in the lives of both the children and the support staff.",
      logo: './img/ncr_csr_logo.png'
    },
  ];

  return (
    <section className="volunteer--section" id="volunteerWork">
      <h2 className="section--title">Volunteer Work</h2>
      <div className="portfolio--container">
        
      </div>
      <div className="volunteer--section--container">
        {volunteerExperiences.map((experience, index) => (
          <div className="volunteer--section--card" key={index}>
            <div className="volunteer--section--card--content">
              <h3 className="volunteer--section--title">{experience.role}</h3>
              <h4 className="volunteer--section--organization">{experience.organization}</h4>
              <p className="volunteer--section--description">{experience.description}</p>
            </div>
            <div className="volunteer-logo">
              <img src={experience.logo} alt={`${experience.organization} Logo`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
