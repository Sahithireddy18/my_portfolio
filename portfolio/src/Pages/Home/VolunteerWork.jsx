import React from 'react';
import './VolunteerWork.css';

export default function VolunteerWork() {
  const volunteerExperiences = [
    {
      role: 'Community Organizer',
      organization: 'Local Food Bank',
      description: 'Organized food drives and coordinated with volunteers to distribute food to those in need.',
      logo: './img/food_bank_logo.png'
    },
    {
      role: 'Mentor',
      organization: 'Tech for Youth',
      description: 'Mentored high school students in basic programming and robotics, helping to foster a love for technology.',
      logo: './img/tech_for_youth_logo.png'
    },
  ];

  return (
    <section className="volunteer--section" id="volunteerWork">
      <div className="portfolio--container">
        <h2 className="section--title">Volunteer Work</h2>
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
