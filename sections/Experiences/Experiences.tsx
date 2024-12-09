import React from "react";
import "./timeline.css";

/* Timeline data: Array of objects representing key milestones with dates, titles, descriptions, and images. */
const timelineData = [
  {
    date: "2024.4 - Present",
    title: "Harvard University",
    description: "Cross-Registration: CS50-Introduction to Computer Science",
    image: "/images/har.jpeg",
  },
  {
    date: "2024.9 - Present",
    title: "Intus Care",
    description: "Business Data Analytics Intern",
    image: "/images/Intus.webp",
  },
  {
    date: "2024.4 - 2024.6",
    title: "LVMH",
    description: "E-Commerce Operations Intern",
    image: "/images/LVMH.webp",
  },
  {
    date: "2023.8 - 2024.2",
    title: "TikTok",
    description: "Product Management Intern",
    image: "/images/TikTok.webp",
  },
  {
    date: "2024.6 - 2025.5",
    title: "Brown University",
    description: "Master in Innovation Management & Entrepreneurship",
    image: "/images/brownu.webp",
  },
  {
    date: "2022.6 - 2022.8",
    title: "Tencent",
    description: "Product Design Intern",
    image: "/images/tenc.webp",
  },
  {
    date: "2021.9 - 2023.6",
    title: "Sun Yat-sen University",
    description: "Bachelor in Business Administration",
    image: "/images/sysu.webp",
  },
];

/* Timeline component: Displays a vertical timeline of experiences and education milestones */
const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* Display image for the timeline item */}
            <div className="timeline-image">
              <img src={item.image} alt={item.title} />
            </div>
            {/* Display content either on the left or right depending on the index */}
            <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
              <h4 className="timeline-date">{item.date}</h4>
              <p className="timeline-text">{item.title}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
