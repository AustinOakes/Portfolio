import "./cert-card.css"
import azure from "./../../images/azure.png"
import power_platform from "./../../images/power-platform.png"
import power_bi from "./../../images/power-bi.png"

export default function CertCard (props) {
    return <>
        <div className="card-container flex">
            <div>
                <h2>{props.title}</h2>
                <p className="mobile-hide">{props.description}</p>
                <p className="mobile-hide">Earned: {props.earnedDate}</p>
                <p className="mobile-hide">Expiration: {props.expirationDate}</p>
            </div>
            <a href={props.url}  target="_blank" rel="noopener noreferrer"><img className="cert-img pulse" src={VerifyImage(props.image)}></img></a>
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