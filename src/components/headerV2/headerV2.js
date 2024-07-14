import { Link } from "react-router-dom"
import './headerV2.css'
import portrait from './../../images/portrait.jpg'
import resume from './../../resume/Resume_AustinOakes_20240219.docx'

export default function HeaderV2 () {
    return <>
        <nav>
            <div className='flex flex-column align-center'>
                <h1>Austin Oakes</h1>
                <img src={portrait} className='portrait flex'></img>
                <h3>Software Developer</h3>
            </div>
            <div className='button-container flex flex-column'>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/projects">Projects</Link></button>
                <button><a href={resume} download>Resume</a></button>
                <button><Link to="/contact">Contact</Link></button>
                <div className='icon-container'>
                    <a href="https://github.com/AustinOakes"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-oakes/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </>
}