
import NavMobile from "./components/NavMobile.jsx"
import FooterMobile from "./components/FooterMobile.jsx"
import Nav from "./components/Nav.jsx"
import FooterDesktop from "./components/FooterDesktop.jsx";
import { useState, useEffect } from "react";
import Sponsers from "./components/Sponsers.jsx";
import Speaker from "./components/SpeakerMobile.jsx";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = screenWidth <= 768;
  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <Speaker />
      {isMobile ? <FooterMobile /> : <FooterDesktop />} 
    </>
  )
}

export default App;
