import "./AboutTedxHome.css"
import text from "../../data/text.json"
function AboutTedxHome() {
    return (
        <div className="TEDxHomecontainer">
            <h2>
                What is TEDx?
            </h2>
            <p>
                {text.TEDxHome}
            </p>
        </div>
    )
}

export default AboutTedxHome;