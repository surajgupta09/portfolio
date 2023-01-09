import React from 'react';
import {FiDownload} from 'react-icons/fi';
import certificate from '../document/certificate.jpg';
import '../customCSS/timeline.css';
import Skills from './Skills';
import Title from './Title';
const Work = () => {
  return (

    <div id="work" className="container text-start">
		<Title title="WORK EXPERIENCES" size="1" color="secondary"/>
			<ul className="timeline">
				<li className='row'>
					<p className='fw-bold customText'>Software Developer, AMDOCS</p>
					<p className='fontSize-small text-secondary' >June 2021 - present</p>
					<p className='col-sm-8 text-dark'>Working as a Full Stack Developer with Java, Knockout.js and RESTApi technologies. Writing understandable code for new requirements and delivering almost zero defect codes to Production.</p>
                    <br />
				</li>
				<li>
					<p className='fw-bold customText'>Web Developer Intern, Dharti Foundation <a className='fs-5' href={certificate} download='intern_certi'><FiDownload /></a></p>
					<p className='fontSize-small text-secondary' >February 2021 - March 2021</p>
					<p className='col-sm-8 text-dark'>Working as a Web Developer Intern with PHP, Javascript, HTML5, CSS3 technologies. Key role was to develop frontend UI and mapping with backend database and routing. </p>
                    <br />
                </li>
			</ul>
            <Skills />
    </div>
  )
};
export default Work;
