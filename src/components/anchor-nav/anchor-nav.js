import {HashLink} from "react-router-hash-link"
import "./anchor-nav.css"

export default function AnchorNav() {
    return <>
        <div className="anchor-container">
            <HashLink smooth to="#welcome"><button>Welcome</button></HashLink>
            <HashLink smooth to="#certifications"><button>Certifications</button></HashLink>
        </div>
    </>
}