import "./cert-card.css"
import azure from "./../../images/azure.png"
import power_platform from "./../../images/power-platform.png"
import power_bi from "./../../images/power-bi.png"

export default function CertCard (props) {
    return <>
        <div className="card-container flex">
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>Earned: {props.earnedDate}</p>
                <p>Expiration: {props.expirationDate}</p>
            </div>
            <img className="cert-img" src={VerifyImage(props.image)}></img>
        </div>
    </>
}

function VerifyImage(image){
    switch(image){
        case "power-bi":
            return power_bi
        case "power-platform":
            return power_platform
        case "azure":
            return azure
        default:
            return "none"
    }
}