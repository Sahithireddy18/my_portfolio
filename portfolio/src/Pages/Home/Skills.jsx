import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills--section" id="mySkills">
       <h2 className="section--title">Skills</h2>
      <div className="portfolio--container">
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Programming Languages</h3>
            <p className="skills--section--description">
              I have a solid foundation in programming languages including Python, C++, Java, JavaScript, TypeScript, and C#. My hands-on experience extends to both relational and non-relational database systems such as MySQL, MSSQL, MongoDB, and Postgres. I thrive on the challenges each project presents, whether it’s structuring data or optimizing queries. I have a passion for solving complex problems and delivering efficient, high-quality solutions.
            </p>
          </div>
          <div className="skill-logo">
            <img src='./img/Language_logo.png' alt="Languages" />
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Web Development</h3>
            <p className="skills--section--description">
              Specialized in HTML, CSS, Bootstrap, and Material UI to create responsive and visually appealing designs. I am proficient in React and Redux for building dynamic user interfaces and adept at AJAX and jQuery for seamless asynchronous interactions. On the backend, I excel with Node.js, Express, Spring Boot, Hibernate, .NET, and PHP, developing robust and scalable server-side applications. Additionally, I have extensive experience with REST/SOAP web services, ensuring reliable and efficient API integrations.
            </p>
          </div>
          <div className="skill-logo">
            <img src='./img/webdev_logo.png' alt="Web Development" />
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Tools and Testing</h3>
            <p className="skills--section--description">
              Proficient in modern testing methodologies such as JUnit, Jest, and Behavior Driven Development (BDD). My expertise in version control and continuous integration is demonstrated through extensive use of Git, TFS, BitBucket, and Jenkins, streamlining and enhancing development workflows. I excel in using development tools like Visual Studio Code, Visual Studio, Eclipse, Webpack, Babel, Maven and NPM.
            </p>
          </div>
          <div className="skill-logo">
            <img src='./img/testtools_logo.png' alt="Tools and Testing" />
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Cloud and DevOps</h3>
            <p className="skills--section--description">
              With extensive experience in AWS services such as EC2, S3, and Lambda, I excel in developing and deploying scalable, secure, and efficient cloud applications. By leveraging Lambda, I created serverless applications that enhance performance and reduce operational costs. I am proficient in Kubernetes, Docker, and CI/CD pipelines, streamlining the deployment, scaling, and management of containerized applications.
            </p>
          </div>
          <div className="skill-logo">
            <img src='./img/CloudDev_logo.png' alt="Cloud and DevOps" />
          </div>
        </div>
      </div>
    </section>
  );
}
