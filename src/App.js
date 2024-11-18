import './assets/css/styles.css';
import Certificate from './component/Certificate';
import Experience from './component/Experience';
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
            <Experience />
            <Certificate />

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
