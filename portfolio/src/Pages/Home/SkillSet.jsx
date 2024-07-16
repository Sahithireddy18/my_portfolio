import React from 'react';
import './SkillSet.css';

const skills = [
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: '', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
    { name: 'SQL Server', logo: 'https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'Node.JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Springboot', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
    { name: 'Jest', logo: 'https://jestjs.io/img/jest.svg' },
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { name: 'BitBucket', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg' },
    { name: 'Jenkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
  
];


const SkillSet = () => {
  return (
    <div id='skillset'>
      <h2 className="skills-title">Skill Set</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
