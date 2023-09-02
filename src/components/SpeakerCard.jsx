import { useNavigate } from "react-router-dom";
import "./SpeakerCard.css";
function SpeakerCard(props) {
  const navigate = useNavigate();
  function handleClick() {
    props.setSpeakerProps({
      name: props.name,
      talkTitle: props.talkTitle,
      image: props.imageLarge,
      breif: props.breif,
      instagram: props.instagram
    });
    // redicrect to speaker page
    navigate("/speaker");
  }
  return (
    <div className="SpeakerCard" >
      <div className="speaker-image">
        <img src={props.image} />
      </div>
      <div className="speaker-info">
        <h3>{props.name}</h3>
        {/* <p>{props.talkTittle}</p> */}
      </div>
    </div>
  );
}

export default SpeakerCard;