import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi! I am Kenton Tang</h1>
        <p className="home-description">A CS student on an exchange at UPenn, passionate about Software Engineering and Machine Learning.</p>
        <div className="home-icons">
          <a href="https://github.com/kenton-tang-kl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kenton-t-5a4b48255/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="home-buttons">
          <a href="/resume.pdf" target="_blank" className="btn">Resume</a>
          <a href="mailto:kentontang0202@gmail.com" className="btn">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
