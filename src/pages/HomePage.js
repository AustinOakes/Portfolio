import Header from "../components/headerV2/headerV2"
import CertCard from "../components/cert-card/cert-card"
import {pbi_details, az_details, powplat_details} from "./../cert-data.js"

export const HomePage = () => {
    return <>
        <Header/>
        <div className="flex flex-end flex-column align-end">
            <div className='section-container flex flex-column'>
                <h1>Hey! Welcome in!</h1>
                <i className="fa-solid fa-chevron-down shake"></i>
            </div>
            <div className="color-container alt-section-color">
                <div className='section-container flex flex-column'>
                    <h1>Certifications</h1>
                    <CertCard 
                        title={pbi_details.title} 
                        description={pbi_details.description}
                        earnedDate={pbi_details.earnedDate}
                        expirationDate={pbi_details.expirationDate}
                        image={pbi_details.image}
                    />
                    <CertCard
                        title={powplat_details.title} 
                        description={powplat_details.description}
                        earnedDate={powplat_details.earnedDate}
                        expirationDate={powplat_details.expirationDate}
                        image={powplat_details.image}
                    />
                    <CertCard
                        title={az_details.title} 
                        description={az_details.description}
                        earnedDate={az_details.earnedDate}
                        expirationDate={az_details.expirationDate}
                        image={az_details.image}
                    />
                </div>
            </div>
        </div>
    </>
}