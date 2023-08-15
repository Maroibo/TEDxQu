import "./AboutTed.css"
import text from "../../data/text.json"
function AboutTed() {
    return (
        <div className="TEDcontainer">
            <h2>
                About TED
            </h2>
            <p>
                {text.TED}
            </p>
        </div>
    )
}

export default AboutTed;