import React from 'react';
import './WorkExperience.css';

const workExperiences = [
  {
    role: 'Full Stack Developer',
    company: 'Elevance Health',
    description: "Developed an application which significantly empowered the valuation team. This application was designed for financial analysts to efficiently analyze data, calculate reserves such as IBNR and subsidiary pay, and make informed decisions. By allowing users to fetch data, create specific data cuts, and calculate reserves based on these cuts, the application enhanced the team's productivity by 40%. Provided continuous support and enhancements, promptly responding to user feedback and implementing improvements that reduced issue resolution time by 30%.",
      logo: './img/elevance_logo.png'
  },
  {
    role: 'Graduate Research Assistant',
    company: 'UMBC',
    description: 'I designed and developed a sophisticated multiplayer game featuring advanced real-time capabilities, leveraging WebSockets for seamless bidirectional communication. This technology enabled the transmission of a wide range of in-game events among multiple players, ensuring a smooth and immersive gaming experience. In addition to my development work, I served as an educator for the Data Visualization and Computer Networks course, where I was responsible for grading assignments and providing feedback to students.',
    logo: './img/umbc_logo.png'
  },
  {
    role: 'Software Development Engineer 3 Intern',
    company: 'Walmart',
    description: 'I developed a chatbot for Microsoft Teams to address the challenge associates faced in accessing corporate acronyms. Walmart, known for its extensive use of acronyms, lacked a centralized platform for easy lookup, leading to significant time spent on acronym research. The bot I developed enabled associates to swiftly search for acronyms, upvote or downvote their relevance, and add comments for context, reducing research time by an impressive 90%. This project not only streamlined the information retrieval process but also significantly enhanced the productivity of Walmart associates.',
    logo: './img/walmart_logo.png'
  },
  {
    role: 'Software Engineer',
    company: 'NCR Corporation',
    description: "I contributed to the fuel automation team by crafting BDD test cases in Python and connected our legacy C++ code with modern Python implementations. This ensured seamless integration and robust testing. My role included resolving intricate bugs in Simpumps, a pump simulator, enhancing its accuracy and reliability. I also developed a web application to monitor automation results in real-time, significantly improving our team's efficiency. Implemented CI/CD pipelines, which streamlined our processes, reducing time and enhancing agility.",
    logo: './img/ncr_logo.png'
  },
  {
    role: 'Software Engineer Intern',
    company: 'NCR Corporation',
    description: ' Developed an application designed to view reports through interactive dashboards. Previously, there was no dedicated tool for visualizing data in charts and graphs, which hindered efficient data analysis and decision-making. This application allowed users to define custom data parameters, apply filters, and select various visualization options, significantly enhancing their data analysis capabilities. This project not only streamlined the reporting process but also empowered users with greater flexibility and insight into their data, driving better business outcomes.',
    logo: './img/ncr_logo.png'
  },
  {
    role: 'Software Engineer',
    company: 'Orpine Inc',
    description: "Developed a comprehensive end-to-end application for managing inventory, available rooms, and their attributes. This included designing an intuitive admin site that facilitated easy access for adding and updating data. The application streamlined the client's operations, transitioning from a manual process to an automated system. It significantly improved the efficiency of managing rooms and pricing, enabling the client to handle these tasks with ease and accuracy. This not only saved time but also reduced the potential for errors, ultimately enhancing the overall management and operational workflow",
    logo: './img/orpine_logo.png'
  }
];

const WorkExperience = () => {
  return (
    <section className="work-experience-section" id="workexperience">
      <h2 className="work-experience-title">Work Experience</h2>
      <div className="work-experience-grid">
        {workExperiences.map((experience, index) => (
          <div className="work-experience-card" key={index}>
            <div className="work-experience-content">
              <div className="work-experience-text">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
              </div>
              <div className="work-experience-logo">
                <img src={experience.logo} alt={`${experience.company} Logo`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
