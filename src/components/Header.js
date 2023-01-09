import { Link } from 'react-scroll';
import  { FaHome }  from 'react-icons/fa';
import {ImBooks} from 'react-icons/im';
import {VscProject,VscFeedback} from 'react-icons/vsc';
import {GiSkills} from 'react-icons/gi';
import {IoLogoTux} from 'react-icons/io';
import '../customCSS/Navbar.css';
const Header = () => {
    return (
  <nav className="navbarCustom sticky-top">
        <div className="navbar-containerCustom containerCustom">
            <input type="checkbox" name="navbarCustom" id="navbarCustom"></input>
            <div className="hamburger-linesCustom">
                <span className="lineCustom line1Custom"></span>
                <span className="lineCustom line2Custom"></span>
                <span className="lineCustom line3Custom"></span>
            </div>
            <div className="ulCustom menu-itemsCustom">
                <div className="liCustom"><Link to='hello' spy={true} smooth={true} offset={-80} duration={300}  className="btn" ><FaHome /> HELLO</Link></div>
                <div className="liCustom"><Link to='education' spy={true} smooth={true} offset={-100} duration={300}  className="btn" ><ImBooks /> EDUCATION</Link></div>
                <div className="liCustom"><Link to='work' spy={true} smooth={true} offset={-100} duration={300}  className="btn" ><GiSkills/> WORK</Link></div>
                <div className="liCustom"><Link to='project' spy={true} smooth={true} offset={-100} duration={300}  className="btn" ><VscProject/> PROJECTS</Link></div>
                <div className="liCustom"><Link to='feedback' spy={true} smooth={true} offset={-150} duration={300} className="btn" ><VscFeedback/> GET IN TOUCH</Link></div>
            </div>
            <h1 className="logoCustom"><IoLogoTux /></h1>
        </div>
    </nav>
    )
}
export default Header;