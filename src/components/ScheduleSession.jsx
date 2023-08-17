import "./ScheduleSession.css";
function Schedule(props) {
  return (
    <div className="ScheduleSession">
    <span>{props.jobTitle}</span>
    <div className="decorations">    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="#76A9E3"/>
</svg>
<div className="line"></div>
</div>

    <div className="main-part">
        <p>{props.name}</p>
        <p>{props.talkTitle}</p>
    </div>
    <span>{props.time}</span>
    </div>
  );
}

export default Schedule;