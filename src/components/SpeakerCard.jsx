import "./SpeakerCard.css";
function SpeakerCard(props) {
  return (
    <div className="SpeakerCard">
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