import React from 'react';
import {FiDownload} from 'react-icons/fi';
import resume from '../document/ResumeV2.pdf';
import Title from './Title';
const Intro = () => {
  return (
    <div id="hello" className='container text-start p-5'>
        <Title title="Hi_" size="1" color="secondary"/>
        <p className='fs-5'>I am Software Developer able to build things presence from the ground up - from Planning, Development, Testing to Deployment. Skilled at writing well-designed, testable and efficient code using current best practices in code development. Fast learner, hard worker and team player who is proficient in various languages and Web tools.</p>
        <a className='btn btn-lg btn-outline-success' href={resume} download='Suraj_Resume'><FiDownload /> Download Resume</a> 
    </div>
  )
}
export default Intro;
