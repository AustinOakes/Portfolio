import { HashLink } from "react-router-hash-link"
import './headerV2.css'
import portrait from './../../images/portrait-2.jpg'
import resume from './../../resume/Resume_AustinOakes_20240925.pdf'

export default function HeaderV2 () {
    
    return <>
        <nav id="desktop-nav">
            <div className='flex flex-column align-center mobile-hide'>
                <img src={portrait} className='portrait' alt="Austin Oakes"></img>
                <h1>Austin Oakes</h1>
                <h3>Software Engineer</h3>
            </div>
            <div className='button-container flex flex-column'>
                <div className="link-container mobile-hide"><HashLink smooth to="#welcome">Home</HashLink></div>
                {/* <button><Link to="/projects">Projects</Link></button> */}
                <div className="link-container mobile-hide"><HashLink smooth to="#about-me">About Me</HashLink></div>
                <div className="link-container mobile-hide"><HashLink smooth to="#certifications">Certifications</HashLink></div>
                <div className="link-container mobile-hide"><a href={resume} download>Resume</a></div>
                <div className='icon-container'>
                    <a href="https://github.com/AustinOakes" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-oakes/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </>
}