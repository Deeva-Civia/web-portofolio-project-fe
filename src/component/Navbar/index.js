import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [navbar, setNavbar] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "navbar/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setNavbar(data);
            });
        const handleScroll = () => {
            const sections = ['home', 'skills', 'experience', 'certificate', 'project', 'contact'];
            
        // Mencari section yang sedang aktif berdasarkan posisi scroll
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 200 && rect.bottom >= 100;
                }
                return false;
            }) || 'home';
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setActiveSection('home');
};

const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    }
};

    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <a 
                        href="#home" 
                        className={activeSection === 'home' ? 'active' : ''} 
                        onClick={scrollToTop}
                    >
                        {navbar.section1}
                    </a>
                </li>
                <li>
                    <a 
                        href="#skills" 
                        className={activeSection === 'skills' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('skills', e)}
                    >
                        {navbar.section2}
                    </a>
                </li>
                <li>
                    <a 
                        href="#experience" 
                        className={activeSection === 'experience' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('experience', e)}
                    >
                        {navbar.section3}
                    </a>
                </li>
                <li>
                    <a 
                        href="#certificate" 
                        className={activeSection === 'certificate' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('certificate', e)}
                    >
                        {navbar.section4}
                    </a>
                </li>
                <li>
                    <a 
                        href="#project" 
                        className={activeSection === 'project' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('project', e)}
                    >
                        {navbar.section5}
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        className={activeSection === 'contact' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('contact', e)}
                    >
                        {navbar.section6}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;