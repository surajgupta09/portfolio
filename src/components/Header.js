import { Link } from 'react-scroll';
import  { FaHome }  from 'react-icons/fa';
import {ImBooks} from 'react-icons/im';
import {VscProject,VscFeedback} from 'react-icons/vsc';
import {GiSkills} from 'react-icons/gi';
import logo  from "../images/icon-title.png";
import '../customCSS/contactUS.css';
const Header = () => {
    return (
        <nav className="row navbar navbar-expand-lg bg-body-tertiary mb-5 navCustom sticky-top">
            <div className=' col-sm-1 container-fluid justify-content-center'>
                <Link to='home' spy={true} smooth={true} offset={-180} duration={300} className="navbar-brand" ><img src={logo} alt='logoImage'></img></Link>
            </div>
            <div className=" col-sm-8 container-fluid justify-content-end">
                <Link to='hello' spy={true} smooth={true} offset={-80} duration={300}  className="btn btn-lg btn-outline-dark mx-1" ><FaHome /> HELLO</Link>
                <Link to='education' spy={true} smooth={true} offset={-100} duration={300}  className="btn btn-lg btn-outline-dark mx-1" ><ImBooks /> EDUCATION</Link>
                <Link to='work' spy={true} smooth={true} offset={-100} duration={300}  className="btn btn-lg btn-outline-dark mx-1" ><GiSkills/> WORK &  SKILLS</Link>
                <Link to='project' spy={true} smooth={true} offset={-100} duration={300}  className="btn btn-lg btn-outline-dark mx-1" ><VscProject/> PROJECTS</Link>
                <Link to='feedback' spy={true} smooth={true} offset={-150} duration={300} className="btn btn-lg btn-outline-dark mx-1" ><VscFeedback/> GET IN TOUCH</Link>
            </div>
        </nav>
    )
}
export default Header;