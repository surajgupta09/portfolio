import React from 'react';
import Title from './Title';
import '../customCSS/contactUS.css';
import {FaRegCopyright} from 'react-icons/fa';
import Details from './Details';
const GetInTouch = () => {
  return (
    <div id="feedback" className='contactUS row px-5 pt-5'>
        <Title title="GET IN TOUCH_" size="1" color="secondary"/>
        <div className='col-md-6'>
            <Details />
        </div>
        <div className='col-md-6'>
        <form className='text-light  container-fluid justify-content-center'>
            <div className="form-group p-2 text-center">
                <input type="text" name="userName" className="input-form p-2 mb-3" placeholder="Your Name"></input>
                <input type="email"  name="userEmail" className="input-form p-2 mb-3" placeholder="Your E-mail"></input>
                <input className="input-form input-form-height p-2 mb-3"  name="message" placeholder='Type the message here'></input>
                <button type='submit' className="col-lg-6 btn btn-outline-dark mb-4" href='/'>Submit</button>
            </div>
        </form>
        
        </div>   
        <p className='text-center p-3 text-dark'><FaRegCopyright /> 2023 Copyright: surajgupta09</p>     
    </div>
  )
}
export default GetInTouch;