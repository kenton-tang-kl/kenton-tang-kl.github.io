import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ff6347', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #ff6347' }}
          date="June 2023 - August 2023"
          iconStyle={{ background: '#ff6347', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Optiver Challenge</h3>
          <h4 className="vertical-timeline-element-subtitle">HacktheBurgh 2024</h4>
          <p>Participated in HacktheBurgh 2024 sponsored by Optiver, collaborating within a team of five to refine an existing market-making strategy aimed at dynamically responding to news feeds. </p>
        </VerticalTimelineElement>    

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ff6347', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #ff6347' }}
          date="June 2023 - August 2023"
          iconStyle={{ background: '#ff6347', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">InfPALS</h3>
          <h4 className="vertical-timeline-element-subtitle">School of Informatics, University of Edinburgh</h4>
          <p>Organized workshops on industry skills such as Command Line, Git & GitHub, Interview Preparations, and Portfolio Projects</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  );
}

export default Experience;
