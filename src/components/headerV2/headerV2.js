import './headerV2.css'
import portrait from './../../images/portrait.jpg'

export default function HeaderV2 () {
    return <>
        <nav>
            <div className='flex flex-column align-center'>
                <h3>Austin Oakes</h3>
                <img src={portrait} className='portrait flex'></img>
                <h5>Software Developer</h5>
            </div>
            <div className='flex flex-column'>
                <button><a href="/">Home</a></button>
                <button><a href="/projects">Projects</a></button>
                <button><a href="#">Resume</a></button>
                <button><a href="/contact">Contact</a></button>
                <div className='icon-container'>
                    <a href="https://github.com/AustinOakes"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-oakes-88945914b/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </>
}