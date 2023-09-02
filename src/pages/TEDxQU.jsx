import MainTheme from "../components/MainTheme";
import Schedule from "../components/Schedule";
import SpeakersLineUp from "../components/SpeakersLineUp";
const TEDxQU = (props) => {
  return (
    <>
      <MainTheme displayDescription={true} />
      <SpeakersLineUp setSpeakerProps={props.setSpeakerProps} />
      <Schedule />
    </>
  );
};

export default TEDxQU;
