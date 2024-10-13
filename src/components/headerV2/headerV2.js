import { Link } from "react-router-dom"
import './headerV2.css'
import portrait from './../../images/portrait2.jpg'
import resume from './../../resume/Resume_AustinOakes_20240925.pdf'

export default function HeaderV2 () {
    
    return <>
        <nav>
            <div className='flex flex-column align-center'>
                <img src={portrait} className='portrait flex'></img>
                <h1>Austin Oakes</h1>
                <h3>Software Engineer</h3>
            </div>
            <div className='button-container flex flex-column'>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/projects">About Me</Link></button>
                <button><a href={resume} download>Resume</a></button>
                {/* <button><Link to="/contact">Contact</Link></button> */}
                <div className='icon-container'>
                    <a href="https://github.com/AustinOakes"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-oakes/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </>
}