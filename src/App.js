import './assets/css/styles.css';
import Navbar from './component/Navbar';


function App() {
  return (
      <div classname="App">
        <Navbar />
        <main>
          <div className="container">
            <section id="home" className="content">
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
            </section>

            <section id="skills">
              <h2 className="sub-title">Skills</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <img className="skill-icon" src='img/icons-programming.png' alt='programming' />
                  <h3 className="skill-title">Programming</h3>
                  <p className="skill-description">
                    Proficient in Python, C#, SQL, JavaScript, HTML, and CSS to develop functional and efficient solutions for web and software projects.
                  </p>
                </div>

                <div className="skill-card">
                  <img className="skill-icon" src='img/icons-design.png' alt='design' /> 
                  <h3 className="skill-title">Design Tools</h3>
                  <p className="skill-description">
                    Experienced in using Figma, Canva, Visual Studio, and XAMPP to create visually stunning designs and streamline development workflows.
                  </p>
                </div>

                <div className="skill-card">
                  <img className="skill-icon" src='img/icons-project-management.png' alt='project-management' />
                  <h3 className="skill-title">Project Management</h3>
                  <p className="skill-description">
                    Skilled in creating and managing Gantt charts, performing cost analysis, and calculating Break-Even Points (BEP) for effective project execution.
                  </p>
                </div>

                <div className="skill-card">
                  <img className="skill-icon" src='img/icons-leadership.png' alt='leadership' />
                  <h3 className="skill-title">Leadership</h3>
                  <p className="skill-description">
                    Proven ability to lead and inspire teams, driving success in various projects and large-scale events through effective communication and coordination.
                  </p>
                </div>
                <div className="blur-circle blue-circle" />
              </div>
            </section>

            <section id="experience">
              <h2 className="sub-title">Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="date">Aug 2024 - Present</div>
                  <div className="subtitle">Computer Science Student Association (CSSA)</div>
                  <div className="role">Education &amp; BEM</div>
                  <div className="description">Managed student aspirations and conducted tutoring sessions.</div>
                </div>
                <div className="timeline-item">
                  <div className="date">Aug 2024 - Sep 2024</div>
                  <div className="subtitle">Filkom Day Committee</div>
                  <div className="role">PIC</div>
                  <div className="description">Managed student aspirations and conducted tutoring sessions.</div>
                </div>
                <div className="timeline-item">
                  <div className="date">Aug 2023 - Dec 2023</div>
                  <div className="subtitle">Event Organizer Unklab</div>
                  <div className="role">Member</div>
                  <div className="description">Organized various campus events.</div>
                </div>
                <div className="timeline-item">
                  <div className="date">Apr 2022 - May 2022</div>
                  <div className="subtitle">Graduation Committee, SMAN 1 Airmadidi</div>
                  <div className="role">Treasurer</div>
                  <div className="description">Managed finances for an event with 500 participants.</div>
                </div>
              </div>
              <div className="blur-circle pink-circle" />
            </section>

            <section id="certificate">
              <h2 className="sub-title">Certificate</h2>
              <div className="certificates-grid">
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 1" />
                </div>
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 2" />
                </div>
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 3" />
                </div>
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 4" />
                </div>
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 5" />
                </div>
                <div className="certificate-card">
                  <img src="/api/placeholder/250/150" alt="Certificate 6" />
                </div>
              </div>
            </section>
          </div>
        </main>
    </div>
  );
}

export default App;
