import React from 'react';
import './WorkExperience.css';

const workExperiences = [
  {
    role: 'Full Stack Developer',
    company: 'Company A',
    description: 'Developed various web applications using React and Node.js.'
  },
  {
    role: 'IVR Developer',
    company: 'Company B',
    description: 'Worked on telephony solutions using Genesys Cloud and Dialogflow.'
  },
  {
    role: 'Intern',
    company: 'Company C',
    description: 'Completed an internship in Node.js, focusing on backend development.'
  },
  {
    role: 'React Developer',
    company: 'Company D',
    description: 'Built dashboards using React and Material UI.'
  },
  {
    role: 'Python Developer',
    company: 'Company E',
    description: 'Worked on data analysis projects using Python.'
  },
  {
    role: 'C++ Developer',
    company: 'Company F',
    description: 'Developed performance-critical applications in C++.'
  }
];

const WorkExperience = () => {
  return (
    <section className="work-experience-section" id="workexperience">
    <h2 className="work-experience-title">Work Experience</h2>
    <div className="work-experience-grid">
      {workExperiences.map((experience, index) => (
        <div className="work-experience-card" key={index}>
          <h3>{experience.role}</h3>
          <h4>{experience.company}</h4>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default WorkExperience;
