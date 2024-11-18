const TimelineItem = ({ date, subtitle, role, description }) => {
    return (
        <div className="timeline-item">
            <div className="date">{date}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="role">{role}</div>
            <div className="description">{description}</div>
        </div>
    );
};

export default TimelineItem;