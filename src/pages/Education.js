import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <VerticalTimeline>
        {/* University of Edinburgh */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#1e90ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e90ff' }}
          date="September 2022 - May 2026"
          iconStyle={{ background: '#1e90ff', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">University of Edinburgh</h3>
          <h4 className="vertical-timeline-element-subtitle">BSc in Artificial Intelligence and Computer Science</h4>
          <p>Expected First Class Honors (Average: 87%)</p>
          <p>Relevant Courses: Functional Programming, Object-Oriented Programming, Algorithms and Data Structures, Data Science, Computer Systems, Software Engineering, Reasoning and Agents</p>
        </VerticalTimelineElement>

        {/* University of Pennsylvania */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#1e90ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e90ff' }}
          date="August 2024 - May 2025"
          iconStyle={{ background: '#1e90ff', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">University of Pennsylvania</h3>
          <h4 className="vertical-timeline-element-subtitle">Exchange Program (Major: CIS)</h4>
          <p>Relevant Courses: Natural Language Processing, Computer and Network Security, Math of Machine Learning</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </section>
  );
}

export default Education;
