import { Link } from "react-router-dom";
import "./Nav.css";
import tedxQuLogo from "../../public/TEDxQu-Logo.png"; // Import the logo image

export default function Nav() {
  return (
    <nav className="desktop">
      <img src={tedxQuLogo} alt="" /> {/* Use the imported image */}
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
    </nav>
  );
}
