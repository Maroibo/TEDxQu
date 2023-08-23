import QuEvent from "../components/QuEvent";
import WhatisTEDx from "../components/WhatisTEDx";

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
          <source src="../../public/ORGANIZER PROMO.mp4" type="video/mp4" />
        </video>
      </div>

      <QuEvent />
      <WhatisTEDx />
    </>
  );
};

export default Home;
