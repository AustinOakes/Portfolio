import { HashLink } from "react-router-hash-link"
import Header from "../components/headerV2/headerV2"
import CertCard from "../components/cert-card/cert-card"
import { pbi_details, az_details, powplat_details } from "./../cert-data.js"
import dog from './../images/dog.jpg'
import couple from './../images/couple.jpg'

export const HomePage = () => {

    return <>
        <Header/>
        <div className="flex flex-end flex-column align-end">
            <div id="welcome" className='section-container flex flex-column'>
                <h1><span className="royal-blue">Hey!</span> Welcome in!</h1>
                <HashLink smooth to="#about-me"><i className="fa-solid fa-chevron-down shake royal-blue"></i></HashLink>
            </div>
            <div id="about-me" className='section-container flex flex-column'>
                <h1>About Me</h1>
                <div className="about-detail-container">
                    <p>
                        From a young age, I've been driven by a passion for solving technical problems. 
                        What started as a hobby quickly established itself as a calling towards a career in software engineering. 
                        I feel incredibly grateful to have been surrounded by supportive family, friends, and mentors who inspired me to pursue a path in a field that truly excites me.
                        Over the years, I've had the privelege of working with multiple clients, creating innovative solutions to meet their uniqe challenges.
                    </p>
                    <p>When I'm not writing code, you'll find me indulging in video games, learning photography or spending time with my fiancée and our dog.</p>
                </div>
                <div className="about-image-container">
                    <img src={dog} className='image'></img>
                    <img src={couple} className='image'></img>
                </div>
            </div>
            <div id="certifications" className='section-container flex flex-column'>
                <h1>Certifications</h1>
                <CertCard 
                    title={pbi_details.title} 
                    description={pbi_details.description}
                    earnedDate={pbi_details.earnedDate}
                    expirationDate={pbi_details.expirationDate}
                    image={pbi_details.image}
                    url={pbi_details.url}
                />
                <CertCard
                    title={powplat_details.title} 
                    description={powplat_details.description}
                    earnedDate={powplat_details.earnedDate}
                    expirationDate={powplat_details.expirationDate}
                    image={powplat_details.image}
                    url={powplat_details.url}
                />
                <CertCard
                    title={az_details.title} 
                    description={az_details.description}
                    earnedDate={az_details.earnedDate}
                    expirationDate={az_details.expirationDate}
                    image={az_details.image}
                    url={az_details.url}
                />
            </div>
        </div>
    </>
}