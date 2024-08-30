import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'NLP',
    description: [
      'Conducted a comprehensive analysis of ultramarathon participation and performance using a dataset spanning over two centuries, focusing on trends such as the impact of historical events and gender dynamics.',
      'Engineered features and developed a predictive model using Random Forest Classifier, achieving an R² score of 0.689, to forecast ultramarathon finishing times based on variables like event distance, athlete age, and gender.'
    ],
    githubLink: 'https://github.com/King-Long-Tang/Ultramarathon-Data-Analysis',
  },
  {
    title: 'Facebook Clone',
    description: [
      'Architected a full-stack social media platform utilizing the MERN stack, featuring robust user authentication and CRUD operations for posts, including image uploads handled by Multer middleware, real-time likes, comments, and deletions, with additional functionalities like dynamic friend management and profile viewing capabilities',
      'Engineered a responsive front-end using React.js, ensuring cross-device compatibility, incorporating advanced UI/UX practices such as a Light/Dark mode toggle with persistent state across sessions',
      'Leveraged Redux for scalable state management and integrated RESTful API endpoints with Express.js to ensure reliable data flow and storage, supporting a scalable user base of 1,000+ simulated users',
    ],
    githubLink: 'https://github.com/King-Long-Tang/Facebook-Clone',
  },
  {
    title: 'Ultramarathon Data Analysis',
    description: [
      'Conducted a comprehensive analysis of ultramarathon participation and performance using a dataset spanning over two centuries, focusing on trends such as the impact of historical events and gender dynamics.',
      'Engineered features and developed a predictive model using Random Forest Classifier, achieving an R² score of 0.689, to forecast ultramarathon finishing times based on variables like event distance, athlete age, and gender.'
    ],
    githubLink: 'https://github.com/King-Long-Tang/Ultramarathon-Data-Analysis',
  },
  {
    title: 'Cache & Virtual Memory Simulator',
    description: [
      'Developed a C-based simulator to model Cache, Translation Lookaside Buffers (TLB), and Page Tables, enhancing understanding of virtual memory and memory hierarchies',
      'Implemented features including cache mapping and replacement policies, TLB management, and efficient page table functionality, demonstrating advanced memory management skills in C',

    ],
    githubLink: 'https://github.com/inf2c-cs-2022/coursework2-part2-virtual-memory-and-cache-simulator-Kenton-Tang-HK',
  },
  {
    title: 'Instagram Clone',
    description: [
      'Developed a React Native mobile application mirroring key features of Instagram, utilizing Firebase for backend services, including authentication, storage, and real-time database',
      'Engineered a user-friendly interface enabling essential social media functionalities such as image uploading, post interactions (likes, comments), and real-time content updates',
    ],
    githubLink: 'https://github.com/kenton-tang-kl/Instagram-Clone-Github',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </div>
            <ul className="project-description">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;