import MainTheme from "../components/MainTheme";
import SpeakersCarousel from "../components/SpeakersCarosalMobile";
import Schedule from "../components/Schedule";
const TEDxQU = () => {
  return (
    <>
      <MainTheme displayDescription={true} />
      <SpeakersCarousel />
      <Schedule/>
    </>
  );
};

export default TEDxQU;
