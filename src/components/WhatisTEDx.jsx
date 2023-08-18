import "./WhatisTEDx.css"
import text from "../../data/text.json"
import { Link } from "react-router-dom";
function AboutTedxHome() {
    return (
        <div className="TEDxHomecontainer">
            <h2>
                What is TEDx?
            </h2>
            <p>
            In the spirit of ideas worth spreading, <Link to="about#about-ted"><span>TED</span></Link> has 
            created a program called <Link to="about#about-tedx"><span>TEDx</span></Link>. TEDx is a program of local,
             self-organized events that bring people together to share a 
             TED-like experience. Our event is called TEDx[name], where x = independently organized 
             TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark 
             deep discussion and connection in a small group. 
            The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
            </p>
        </div>
    )
}

export default AboutTedxHome;