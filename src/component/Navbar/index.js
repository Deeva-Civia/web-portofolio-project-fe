import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
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
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#skills" 
                        className={activeSection === 'skills' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('skills', e)}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a 
                        href="#experience" 
                        className={activeSection === 'experience' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('experience', e)}
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a 
                        href="#certificate" 
                        className={activeSection === 'certificate' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('certificate', e)}
                    >
                        Certificate
                    </a>
                </li>
                <li>
                    <a 
                        href="#project" 
                        className={activeSection === 'project' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('project', e)}
                    >
                        Project
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        className={activeSection === 'contact' ? 'active' : ''} 
                        onClick={(e) => scrollToSection('contact', e)}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;