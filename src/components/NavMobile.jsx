import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./NavMobile.css";
import tedxQuLogo from "../../public/TEDxQu-Logo.png"; // Import the logo image
import menuIcon from "../../public/menu.svg"; // Import the menu icon
import xIcon from "../../public/x.png"; // Import the close icon

function NavMobile() {
  const [nav, setNav] = useState(true);

  function toggleNav() {
    setNav(!nav);
  }

  return (
    <>
      <nav>
        <div className="nav-icons">
          <img src={tedxQuLogo} alt="TEDxQu Logo" />
          <img
            src={nav ? menuIcon : xIcon}
            onClick={toggleNav}
            alt={nav ? "Menu Icon" : "Close Icon"}
          />
        </div>
        <CSSTransition
          in={!nav}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="options">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/tedxqu">TEDxQU</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
              <li>
                <Link to="/joinus">Join Us</Link>
              </li>
              <li>
                <a
                  href="https://linktr.ee/tedxqu?fbclid=PAAaYTcMfsNSmzEyYNfPkIjCKKuvIijTGlVZYsx1E-cIrLeew3JNh8epHklHc_aem_Ab7G7VqTaMpHePTqAZMhi0crcOhVzfDe25PoprRUjPc_4zOxpKGNCzBaT25AW9y3irc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </nav>
    </>
  );
}

export default NavMobile;
