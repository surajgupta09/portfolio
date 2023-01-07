import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
const Details = () => {
  return (
    <div className='container'>
    <table className="table table-borderless">
        <tbody className='fs-5'>
            <tr>
                <td className='fw-bold'>Phone :</td>
                <td >(+91) 9718141832</td>
            </tr>
            <tr>
                <td className='fw-bold'>Email :</td>
                <td className=''>suraj09.cs@gmail.com</td>
            </tr>
            <tr>
                <td className='fw-bold'>Address :</td>
                <td >New Delhi, India - 110030</td>
            </tr>
        </tbody>
    </table>
    <div className='container'>
        <a className='profileBtn btn btn-lg fs-1' href='https://github.com/surajgupta09' target="newTab"><BsGithub/></a>
        <a className='profileBtn btn btn-lg fs-1' href='https://www.linkedin.com/in/suraj-gupta-035659190/' target="newTab"><BsLinkedin/></a>
        <a className='profileBtn btn btn-lg fs-1' href='https://www.instagram.com/j_a_v_a.phobia/' target="newTab"><BsInstagram/></a>
    </div>
</div> 
  )
}
export default Details;
