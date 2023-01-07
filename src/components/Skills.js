import React from 'react';
import SingleSkill from './SingleSkill';
import Title from './Title';
const Skills = () => {
  return (
    <div className='row'>
      <Title title="GENERAL SKILLS" size="4" color="secondary"/>
    <div className='col-md-6'>
	    <SingleSkill name="HTML5" rating="7" />
      <SingleSkill name="CSS3" rating="5" />
	    <SingleSkill name="Javascript" rating="7" />
      <SingleSkill name="ReactJS" rating="6" />
    </div>
    <div className='col-md-6'>
	    <SingleSkill name="Core JAVA" rating="8" />
      <SingleSkill name="DBMS & SQL" rating="7" />
	    <SingleSkill name="Git & Github" rating="6" />
      <SingleSkill name="Linux CLI" rating="7" />
    </div>
    </div>    
  )
};
export default Skills;
