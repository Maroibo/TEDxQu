import MainTheme from "../components/MainTheme";
import Schedule from "../components/Schedule";
import SpeakersLineUp from "../components/SpeakersLineUp";
const TEDxQU = () => {
  return (
    <>
      <MainTheme displayDescription={true} />
      <Schedule/>
      <SpeakersLineUp/>
    </>
  );
};

export default TEDxQU;
