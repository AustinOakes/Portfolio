import Header from "../components/headerV2/headerV2"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
    let navigate = useNavigate();
    return <>
        <Header/>
        <div className="flex flex-end flex-column align-end">
            <div className="section-container flex flex-column">
                <h1>How'd you get here?</h1>
                <button className="btn" onClick={() => navigate(-1)}>Go Back!</button>
            </div>
        </div>
    </>
}