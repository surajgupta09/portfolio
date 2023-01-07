import React from 'react';
import ProjectCard from './ProjectCard';
import Project1 from '../images/project1.png';
import Project2 from '../images/project2.png';
import Title from './Title';

const Project = () => {
  return (
    <div id="project" className='container'>
        <Title title="My Projects..." size="1" color="secondary"/>
        <ProjectCard imgURL={Project1} duration="(Summer Internship) (05/2019 - 07/2019)" title="EXPLORING COLLISION AVOIDANCE DURING COMMUNICATION OVER SOUND WAVES" desc="Understanding the given API and designing to avoid collision of data when transfer from multiple nodes over ultrasonic sound waves."/>
        <ProjectCard imgURL={Project2} duration="(Winter Internship) (12/2018 - 01/2019)" title="LIGHT WEIGHT SYNC PROTOCOL USING NANOHTTPD" desc="The given task was to write understandable code for file transfer over machines with multi threading techniques"/>
    </div>
  )
}
export default Project;
