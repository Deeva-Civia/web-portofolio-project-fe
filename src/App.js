import './assets/css/styles.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Skills from './component/Skills';


function App() {
  return (
      <div classname="App">
        <Navbar />
        <main>
          <div className="container">
            <Hero />
            <Skills />

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
                  <img src="img/sertifikat alibaba.png" alt="Cerificate from Alibaba" />
                </div>
                <div className="certificate-card">
                  <img src="img/sertifikat bootstrap.png" alt="Certificate Bootstrap" />
                </div>
                <div className="certificate-card">
                  <img src="img/sertifikat dicoding.png" alt="Certificate from Dicoding" />
                </div>
                <div className="certificate-card">
                  <img src="img/sertifikat javascript.png" alt="Certificate Javascript" />
                </div>
              </div>
              <div className="bottom-certificates">
                <div className="certificate-card">
                  <img src="img/sertifikat ksn nasional.png" alt="Certificate KSN Astronomi" />
                </div>
                <div className="certificate-card">
                < img src="img/sertifikat sololearn.png" alt="Certificate from Sololearn" />
                </div>
              </div>
              <div className="blur-circle blue-circle" />
            </section>

            <section id="project">
              <h2 className="sub-title">Project</h2>
              <div className="project-grid">
                <div className="project-card">
                  <div className="project-image">
                    <img src="img/project hci.png" alt="GoWash Project" />
                  </div>
                  <div className="project-info">
                    <h2>GoWash - Mobile &amp; Web Application Design</h2>
                    <p>A comprehensive design for GoWash, a platform to search for car wash services. The project includes both mobile and web versions, featuring user-friendly interfaces and seamless navigation to enhance user experience.</p>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src="img/sistem absensi asrama new.png" alt="Dormitory Attendance System" />
                  </div>
                  <div className="project-info">
                    <h2>Dormitory Attendance System</h2>
                      <p>A web-based attendance system tailored for dormitory residents at UNKLAB. This system streamlines the process of student check-ins and attendance tracking, making it accessible and efficient through an online platform.</p>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src="img/project vispro home.png" alt="AzureGreen Pharmacy" />
                  </div>
                  <div className="project-info">
                    <h2>AzureGreen Pharmacy - Desktop Application</h2>
                    <p>A desktop application designed for pharmacy administrators. The application simplifies the management of stock, purchases, and financial records, providing an efficient solution for day-to-day operations.</p>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src="img/museum project new.png" alt="Museum Website" />
                  </div>
                  <div className="project-info">
                    <h2>Museum Website</h2>
                    <p>A responsive museum website built using Bootstrap. This project showcases a clean and visually appealing design that adapts seamlessly to different screen sizes, ensuring an optimal user experience across devices.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact">
              <div className="contact-content">
                <h2 className="sub-title">Find Me On</h2>
                <p className="subtitle2">Feel free to connect with me</p>
                <div className="social-icons">
                  <a href="https://github.com/Deeva-Civia" target="_blank"><img src="img/icons8-github-64.png" alt="github" /></a>
                  <a href="https://www.linkedin.com/in/deevacivia/" target="_blank"><img src="img/icons8-linkedin-64.png" alt="linkedin" /></a>
                  <a href="https://www.tiktok.com/@div.chy1?is_from_webapp=1&sender_device=pc" target="_blank"><img src="img/icons8-tiktok-64.png" alt="tiktok" /></a>
                  <a href="https://www.instagram.com/div.cvya/" target="_blank"><img src="img/icons8-instagram-64.png" alt="instagram" /></a>
                </div>
                <p className="email">Email: deevacivia@gmail.com</p>
              </div>
            </section>
            <footer className="footer-container">
              <div className="footer-content">
                <p>&copy; Copyright 2024, Portofolio by Deeva Civia Aulia Lolong</p>
              </div>
            </footer>
          </div>
        </main>
    </div>
  );
}

export default App;
