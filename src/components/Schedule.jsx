import BreakSession from "./BreakSession";
import "./Schedule.css";
import ScheduleSession from "./ScheduleSession";
function Schedule() {
  const speakers = [
    {
      name: "لبابة يوسف",
      talkTitle: "صو تك مصدر قوتك",
      time: "02:00 PM",
    },
    {
      name: "د . خالد الخنجي",
      talkTitle: "نصيحة شكلتني",
      time: "02:30 PM",
    },
    {
      name: "حصة السويدي",
      talkTitle: "الجرأة الأدبية و مفاتيح التغير",
      time: "03:00 PM",
    },
  ];
  const speakers2 = [
    {
      name: "عائشة الرميحي",
      talkTitle: "التنمية المستدامة وأهمية البحث العلمي",
      time: "04:00 PM",
    },
    {
      name: "أ. ريهام هذيل",
      talkTitle: "عندما يصبح الحلم حقيقة",
      time: "04:30 PM",
    },
    {
      name: "شذى بنبية",
      talkTitle: "كيفية النجاح في زمن ثورة الذكاء الصناعي",
      time: "05:00 PM",
    },
    {
      name: "سما الدوري",
      talkTitle: "كيف تنتصر على وحشك",
      time: "05:30 PM",
    }
  ]
  const speakerSessions = speakers.map((speaker, index) => (
    <ScheduleSession
      jobTitle={speaker.jobTitle}
      name={speaker.name}
      talkTitle={speaker.talkTitle}
      time={speaker.time}
      key={index}
    />
  ));
  const speakerSessions2 = speakers2.map((speaker, index) => (
    <ScheduleSession
      jobTitle={speaker.jobTitle}
      name={speaker.name}
      talkTitle={speaker.talkTitle}
      time={speaker.time}
      key={index}
    />
  ));
  return (
    <div className="Schedulecontainer">
      <h2>Schedule</h2>
      <div className="Sessions">{speakerSessions}
      </div>
      <div className="Sessions">
        <BreakSession breakName="إستراحة قصيرة" />
        {speakerSessions2}</div>
    </div>
  );
}

export default Schedule;