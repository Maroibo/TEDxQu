import QuEvent from "../components/QuEvent";
import WhatisTEDx from "../components/WhatisTEDx";
import  intro_Video from "../../public/ORGANIZER PROMO.mp4 ";
const Home = () => {
  return (
    <>
      <div className="intro-vid" style={
        {
          display: "flex",
          justifyContent: "center",
          height: "82vh",
          overflow: "hidden",
          position: "relative",
          background: "#1A020E"
        }
      }>
        <video id="promo-video" autoPlay muted controls >
          <source src={intro_Video} type="video/mp4" />
        </video>
      </div>

      <QuEvent />
      <WhatisTEDx />
    </>
  );
};

export default Home;
