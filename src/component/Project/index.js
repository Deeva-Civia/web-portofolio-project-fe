import ProjectCard from "./ProjectCard";

const Project = () => {
    const projectData = [
        {
            image: "img/project hci.png",
            title: "GoWash - Mobile & Web Application Design",
            description: "A comprehensive design for GoWash, a platform to search for car wash services. The project includes both mobile and web versions, featuring user-friendly interfaces and seamless navigation to enhance user experience."
        },
        {
            image: "img/sistem absensi asrama new.png",
            title: "Dormitory Attendance System",
            description: "A web-based attendance system tailored for dormitory residents at UNKLAB. This system streamlines the process of student check-ins and attendance tracking, making it accessible and efficient through an online platform."
        },
        {
            image: "img/project vispro home.png",
            title: "AzureGreen Pharmacy - Desktop Application",
            description: "A desktop application designed for pharmacy administrators. The application simplifies the management of stock, purchases, and financial records, providing an efficient solution for day-to-day operations."
        },
        {
            image: "img/museum project new.png",
            title: "Museum Website",
            description: "A responsive museum website built using Bootstrap. This project showcases a clean and visually appealing design that adapts seamlessly to different screen sizes, ensuring an optimal user experience across devices."
        }
    ];
    return (
        <section id="project">
            <h2 className="sub-title">Project</h2>
            <div className="project-grid">
                {projectData.map((project, index) =>(
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Project;