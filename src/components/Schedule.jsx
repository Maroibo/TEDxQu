import "./Schedule.css";
import ScheduleSession from "./ScheduleSession";
function Schedule() {
  const speakers = [
    {
      jobTitle: "Senior Software Engineer",
      name: "John Doe",
      talkTitle: "React Hooks",
      time: "10:00 AM",
    },
    {
      jobTitle: "Senior Software Engineer",
      name: "Jane Doe",
      talkTitle: "React Native",
      time: "11:00 AM",
    },
    {
      jobTitle: "Senior Software Engineer",
      name: "James Doe",
      talkTitle: "React Context",
      time: "12:00 PM",
    },
  ];
  const speakerSessions = speakers.map((speaker) => (
    <ScheduleSession
      jobTitle={speaker.jobTitle}
      name={speaker.name}
      talkTitle={speaker.talkTitle}
      time={speaker.time}
    />
  ));
  return (
    <div className="Schedulecontainer">
      <h2>Schedule</h2>
      <div className="Sessions">{speakerSessions}</div>
    </div>
  );
}

export default Schedule;