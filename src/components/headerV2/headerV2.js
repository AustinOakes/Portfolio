import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import './headerV2.css'
import portrait from './../../images/portrait-2.jpg'
import resume from './../../resume/Resume_AustinOakes_20240925.pdf'

export default function HeaderV2 () {
    
    return <>
        <nav>
            <div className='flex flex-column align-center'>
                <img src={portrait} className='portrait'></img>
                <h1>Austin Oakes</h1>
                <h3>Software Engineer</h3>
            </div>
            <div className='button-container flex flex-column'>
                <div className="link-container"><HashLink smooth to="#welcome">Home</HashLink></div>
                {/* <button><Link to="/projects">Projects</Link></button> */}
                <div className="link-container"><HashLink smooth to="#about-me">About Me</HashLink></div>
                <div className="link-container"><HashLink smooth to="#certifications">Certifications</HashLink></div>
                <div className="link-container"><a href={resume} download>Resume</a></div>
                <div className='icon-container'>
                    <a href="https://github.com/AustinOakes"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-oakes/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </>
}