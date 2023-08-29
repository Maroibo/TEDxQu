
import "./Sponsers.css";

// Import sponsor logos
import quLogo from "../../public/QU.png";
import vodafoneLogo from "../../public/Vodafone.png";
import taswerLogo from "../../public/Taswer.png";

function Sponsers() {
  return (
    <div className="Sponserscontainer">
      <h2>Sponsors</h2>
      <div className="sponsers-logos">
        <img src={quLogo} alt="Qatar University Logo" />
        <img src={vodafoneLogo} alt="Vodafone Logo" />
        <img src={taswerLogo} alt="Taswer Logo" />
      </div>
    </div>
  );
}

export default Sponsers;
