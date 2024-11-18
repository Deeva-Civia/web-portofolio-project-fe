import TimelineItem from "./TimelineItem";

const Experience = () => {
    const experienceData = [
        {
            date: "Aug 2024 - Present",
            subtitle: "Computer Science Student Association (CSSA)",
            role: "Education & BEM",
            description: "Managed student aspirations and conducted tutoring sessions."
        },
        {
            date: "Aug 2024 - Sep 2024",
            subtitle: "Filkom Day Committee",
            role: "PIC",
            description: "Coordinated a large-scale event with over 900 participants."
        },
        {
            date: "Aug 2023 - Dec 2023",
            subtitle: "Event Organizer Unklab",
            role: "Member",
            description: "Organized various campus events."
        },
        {
            date: "Apr 2022 - May 2022",
            subtitle: "Graduation Committee, SMAN 1 Airmadidi",
            role: "Treasurer",
            description: "Managed finances for an event with 500 participants."
        }
    ];
    return (
    <section id="experience">
        <h2 className="sub-title">Experience</h2>
        <div className="timeline">
        {experienceData.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
        ))}
        </div>
        <div className="blur-circle pink-circle" />
    </section>
    );
};

export default Experience;