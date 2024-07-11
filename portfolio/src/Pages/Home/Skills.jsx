import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="section--title">My Skills</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Programming Languages</h3>
            <p className="skills--section--description">
              I have a solid foundation in programming languages like Python, C++, Java, JavaScript, TypeScript, and C#. I also have hands-on experience in both relational and non-relational database systems such as MySQL, MSSQL, MongoDB, and Postgres. Whether it's structuring data or optimizing queries, I thrive on the challenges each project presents.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Web Development</h3>
            <p className="skills--section--description">
              I possess strong web development skills, with expertise in HTML, CSS, Bootstrap, and Material UI for creating responsive and visually appealing designs. I am proficient in React and Redux for building dynamic user interfaces, and adept at AJAX and jQuery for seamless asynchronous interactions. On the backend, I excel with Node.js, Express, Spring Boot, Hibernate, .NET, and PHP, enabling the development of robust and scalable server-side applications. Additionally, I have extensive experience with RESTful web services, ensuring reliable and efficient API integrations.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Tools and Testing</h3>
            <p className="skills--section--description">
              I am proficient in modern testing methodologies, including JUnit and Behavior Driven Development (BDD), which I utilize to ensure robust and reliable software. My expertise in version control and continuous integration is demonstrated through extensive use of Git, TFS, BitBucket, and Jenkins, streamlining and enhancing development workflows. I am highly skilled in using Visual Studio Code, Visual Studio, Eclipse, Webpack, Babel, and NPM, all of which contribute to my productivity and the quality of my code. For project management and team collaboration, I am adept with JIRA and Confluence, ensuring effective communication and project tracking.
            </p>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Cloud and DevOps</h3>
            <p className="skills--section--description">
              I have extensive experience with AWS services such as EC2, S3, and Lambda, enabling the development and deployment of scalable, secure, and efficient cloud applications. My proficiency in EC2 allows for flexible and robust server management, while S3 ensures reliable and scalable storage solutions. Utilizing Lambda, I build serverless applications that optimize performance and reduce operational costs. In the realm of DevOps, I am skilled in Kubernetes and Docker, which streamline the deployment, scaling, and management of containerized applications, ensuring consistent and reliable environments across development, testing, and production stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
