import "./Nav.css"
export default function Nav() {
    return (
        <nav className="desktop">
            <img src="../../public/TEDxQu-Logo.png" alt="" />
            <div className="options">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#tedxqu">TEDxQU</a>
                    </li>
                    <li>
                        <a href="#sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a href="#join-us">Join Us</a>
                    </li>
                    <li>
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
