import Header from "../components/headerV2/headerV2"
import CertCard from "../components/cert-card/cert-card"

let pbi_details = {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    description: "Demonstrate methods and best practices that align with business and technical requirements for modeling, visualizing, and analyzing data with Microsoft Power BI.",
    earnedDate: "May 11, 2023",
    expirationDate: "May 11, 2025",
    image: "power-bi",
}

let az_details = {
    title: "Microsoft Certified: Azure Fundamentals",
    description: "Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.",
    earnedDate: "March 19, 2022",
    expirationDate: "N/A",
    image: "azure",
}

let powplat_details = {
    title: "Microsoft Certified: Power Platform Fundamentals",
    description: "Demonstrate the business value and product capabilities of Microsoft Power Platform, such as Power Apps, data connections with Dataverse, and Power Automate.",
    earnedDate: "October 30, 2022",
    expirationDate: "N/A",
    image: "power-platform",
}

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