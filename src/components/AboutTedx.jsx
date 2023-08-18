import "./AboutTedx.css"
import text from "../../data/text.json"
function AboutTedx() {
    return (
        <div className="TEDxcontainer" id="about-tedx">
            <h2>
                About TEDx
            </h2>
            <p>
                {text.TEDx}
            </p>
        </div>
    )
}

export default AboutTedx;