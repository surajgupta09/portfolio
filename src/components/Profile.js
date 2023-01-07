import React from 'react';
import profileImage from '../images/profileImg.jpg';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs';
import '../customCSS/profile.css';
const Profile = () => {
  return (
    <div id="home" className="profileBg card">
        <div className="row g-0">
            <div className="col-lg-4">
                <img src={profileImage} className="img-fluid rounded p-5" alt="profileImage"></img>
            </div>
            <div className="text-light col-lg-6">
                <div className="card-body">
                    <div className="card-title text-start">
                        <p className='fs-1 fw-bold'>Suraj</p>
                        <p className='fs-6'>Software Devloper, Full-Stack Developer</p>
                    </div>
                    <div className='card-text text-start fs-6'>
                    <table className="row table table-borderless">
                    <tbody className='col-md-8 '>
                        <tr>
	                    <td className='text-white-50 fw-bold'>Age :</td>
                        <td className='text-light'>25 yrs</td>
                        </tr>
                        <tr>
                        <td className='text-white-50 fw-bold'>Phone :</td>
                        <td className='text-light'>(+91) 9718141832</td>
                        </tr>
                        <tr>
                         <td className='text-white-50 fw-bold'>Email :</td>
                        <td className='text-light'>suraj09.cs@gmail.com</td>
                        </tr>
                        <tr>
                        <td className='text-white-50 fw-bold'>Address :</td>
                        <td className='text-light'>New Delhi, India - 110030</td>
                        </tr>
                    </tbody>
                    </table>
                    <p className="card-text text-start ">
                        <a className='profileBtn btn btn-lg fs-1' href='https://github.com/surajgupta09' target="newTab"><BsGithub/></a>
                        <a className='profileBtn btn btn-lg fs-1' href='https://www.linkedin.com/in/suraj-gupta-035659190/' target="newTab"><BsLinkedin/></a>
                        <a className='profileBtn btn btn-lg fs-1' href='https://www.instagram.com/j_a_v_a.phobia/' target="newTab"><BsInstagram/></a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;
