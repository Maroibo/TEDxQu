import AboutTed from "../components/AboutTed";
import AboutTedx from "../components/AboutTedx";
const intro_Video = "../../public/TEDxQu Intro_4.mp4";
const About = () => {
  return (
    <>
      {/* <div className="event-photo">
        <img src="../../public/TEDxQu Event 1.png" alt="" />
      </div> */}
      <div className="intro-animation" style={
        {
          display: "flex",
          justifyContent: "center",
          height: "fit-content",
          overflow: "hidden",
          position: "relative",
          background: "#1A020E"
        }
      }>
        <video id="promo-video" autoPlay muted controls style={{
          minWidth: "100%",
        }
        }>
          <source src={intro_Video} type="video/mp4" />
        </video>
      </div>
      <AboutTed />
      <AboutTedx />
    </>
  );
};

export default About;
