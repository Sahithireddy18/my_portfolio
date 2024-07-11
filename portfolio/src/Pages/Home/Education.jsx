import './Education.css';

export default function Education() {
  return (
    <section className="education--section" id="education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
        
          <h2 className="sections--heading">Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
       
          <div className="education--section--card">
            <div className="education--section--card--review">
              <h3> Master of Science in Computer Science, 2021-2023</h3>
              <h2> University of Maryland Baltimore County </h2>
            </div>
          <img src="./img/umbc_logo.png" alt="Avatar" height="90" width="90" />
        
            
          </div>

          <div className="education--section--card">
            <div className="education--section--card--review">
              <h3> Bachelor of Engineering in Computer Science, 2015-2019</h3>
              <h2> Chaitanya Bharathi Institute of Technology </h2>
            </div>
          <img src="./img/cbit_logo.png" alt="Avatar" height="90" width="90" />
        
            
          </div>
     
      </div>
    </section>
  );
}
