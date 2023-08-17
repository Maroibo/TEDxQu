import "./MainTheme.css";
import { useEffect, useState, useRef } from "react";
function MainTheme({ displayDescription }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const themeRef = useRef();

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

  useEffect(() => {
    themeRef.current.src = isMobile
      ? "/MainTheme.jpg"
      : "/TEDxQatarUniversityDesktopTheme.png";
  }, [isMobile, themeRef]);

  return (
    <>
      <div className="MainThemecontainer">
        <img ref={themeRef} alt="" />
        {displayDescription && (
          <>
            <h2>Evolution in Action: How the Past Shapes the Future</h2>
            <p>
              Evolution in Action: How the Past Shapes the Future is a{" "}
              <span>TEDx</span> theme that emphasizes the importance of
              understanding the history of different fields to trace the
              evolution of ideas and how they've shaped our present. This theme
              recognizes the intention behind seeking knowledge in various
              fields and how it has allowed us to reach where we are today.By
              looking back at the evolution of ideas and fields, attendees can
              gain a deeper appreciation for the journey that has led us to the
              current state of affairs. Through this theme, attendees will
              explore the history of different fields and learn how they have
              changed over time, reflecting on the intention behind seeking
              knowledge in various fields and how it has driven progress and
              innovation. By tracing the evolution of ideas and fields,
              attendees will gain new insights and perspectives that can inspire
              them to drive meaningful change in the future.
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default MainTheme;
