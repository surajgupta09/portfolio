import React from 'react';
import '../customCSS/timeline.css';
import Title from './Title';
const Education = () => {
  return (
    <div id="education" className="container text-start">
			<Title title="EDUCATION" size="1" color="secondary"/>
			<ul className="timeline">
				<li>
					<p className='fw-bold text-primary'>National Institute of Technology, Durgapur</p>
					<p className='fontSize-small text-secondary' >July 2018 - May 2021</p>
					<p className='text-dark'>Master of Computer Applications (MCA)</p>
                    <br />
				</li>
				<li>
					<p className='fw-bold text-primary'>University of Delhi</p>
					<p className='fontSize-small text-secondary' >August 2015 - May 2018</p>
					<p className='text-dark'>B.Sc.(Hons) Computer Science</p>
                    <br />
                </li>
				<li>
					<p className='fw-bold text-primary' >New Green Fields School, Saket New Delhi</p>
					<p className='fontSize-small text-secondary' >April 2014 - March 2015</p>
					<p className='text-dark'>Intermediate School (12th)</p>
                    <br />
                </li>
                <li>
					<p className='fw-bold text-primary' >D.A.V. Model School</p>
					<p className=' fontSize-small text-secondary' >April 2012 - March 2013</p>
					<p className='text-dark'>High School (10th)</p>
                    <br />
                </li>
			</ul>
</div>
  )
}
export default Education;
