import "./NavMobile.css"
import { useState } from "react"
import { CSSTransition } from "react-transition-group";
function NavMobile() {
    const [nav, setNav] = useState(true)
    const navIcon = "../../public/menu.svg"
    const navIconAlt = "../../public/x.png"
    function toggleNav() {
        setNav(!nav)
    }
    return (
        <>
        <nav>
        <div className="nav-icons">
        <img src="../../public/TEDxQu-Logo.png" alt="" />
        <img src={nav?navIcon:navIconAlt}  onClick={toggleNav}alt="" />
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tedxqu">TEDxQU</a>
          </li>
          <li>
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/joinus">Join Us</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
        </div>
      </CSSTransition>
        </nav>
        </>
      )
}

export default NavMobile