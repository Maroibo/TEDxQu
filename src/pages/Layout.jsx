import NavMobile from "../components/NavMobile.jsx";
import FooterMobile from "../components/FooterMobile.jsx";
import Nav from "../components/Nav.jsx";
import FooterDesktop from "../components/FooterDesktop.jsx";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = screenWidth <= 768;
  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <Outlet />
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
}

export default Layout;
