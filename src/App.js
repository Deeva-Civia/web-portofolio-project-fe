import './assets/css/styles.css';
import Certificate from './component/Certificate';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Project from './component/Project';
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
            <Project />
            <Contact />
            <Footer />
          </div>
        </main>
    </div>
  );
}

export default App;
