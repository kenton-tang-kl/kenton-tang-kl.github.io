import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hello! I'm [Your Name], a software developer.</p>
      </header>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
          {/* Add more projects */}
        </ul>
      </section>
      <footer>
        <p>Contact: [Your Email]</p>
      </footer>
    </div>
  );
}

export default App; 
