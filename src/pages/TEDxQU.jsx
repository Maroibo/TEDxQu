import MainTheme from "../components/MainTheme";
import Schedule from "../components/Schedule";
import SpeakersLineUp from "../components/SpeakersLineUp";
const TEDxQU = () => {
  return (
    <>
      <MainTheme displayDescription={true} />
      <SpeakersLineUp/>
      <Schedule/>
    </>
  );
};

export default TEDxQU;
