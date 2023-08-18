import "./BreakSession.css"
import text from "../../data/text.json"
function BreakSession(props) {
    return (
        <div className="BreakSessionContainer" >
            <span>{props.breakName}</span>
        </div>
    )
}

export default BreakSession;