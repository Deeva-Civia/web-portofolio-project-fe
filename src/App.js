import './assets/css/styles.css';
import Navbar from './component/Navbar';


function App() {
  return (
      <div classname="App">
        <Navbar />
        <main id="home" className="content">
            <div className="text-content">
              <p className="greeting">Hi, I'm Deeva Civia Aulia Lolong</p>
              <h1 className="title">
                <span className="purple">Web Developer &amp;</span>
                <span className="purple">Design Enthusiast</span>
              </h1>
              <p className="description">
                I'm a 5th-semester university student with a strong interest in web development and a love for creating visually stunning designs. Combining technical skills and creativity, I strive to build user-friendly and aesthetically pleasing web experiences.
              </p>
              <div className="blur-circle blue-circle" />
            </div>
            <div className="image-container">
              <div className="background-square-2" />
              <div className="background-square" />
              <div className="profile-frame">
                <img src="img/foto porto.png" alt="Profile" className="profile-image" />
              </div>
              <div className="blur-circle pink-circle" />
              <div className="blur-circle blue-circle" />
              <div className="decorative-dot-small dot-1" />
              <div className="decorative-dot-medium dot-2" />
              <div className="decorative-dot-small dot-3" />
              <div className="decorative-dot-medium dot-4" />
            </div>
        </main>

        <section id="skills" className="skills-section">
          <div className="container">
            <h1>Skills</h1>
            <div className="skills-grid">
              <div className="skill-card">
                <img className="skill-icon" src='img/icons-programming.png' alt='programming' />
                <h2 className="skill-title">Programming</h2>
                <p className="skill-description">
                  Proficient in Python, C#, SQL, JavaScript, HTML, and CSS to develop functional and efficient solutions for web and software projects.
                </p>
              </div>

              <div className="skill-card">
                <img className="skill-icon" src='img/icons-design.png' alt='design' /> 
                <h2 className="skill-title">Design Tools</h2>
                <p className="skill-description">
                  Experienced in using Figma, Canva, Visual Studio, and XAMPP to create visually stunning designs and streamline development workflows.
                </p>
              </div>

              <div className="skill-card">
                <img className="skill-icon" src='img/icons-project-management.png' alt='project-management' />
                <h2 className="skill-title">Project Management</h2>
                <p className="skill-description">
                  Skilled in creating and managing Gantt charts, performing cost analysis, and calculating Break-Even Points (BEP) for effective project execution.
                </p>
              </div>

              <div className="skill-card">
                <img className="skill-icon" src='img/icons-leadership.png' alt='leadership' />
                <h2 className="skill-title">Leadership</h2>
                <p className="skill-description">
                  Proven ability to lead and inspire teams, driving success in various projects and large-scale events through effective communication and coordination.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
