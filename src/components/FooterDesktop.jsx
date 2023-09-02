
import { Link } from "react-router-dom";
import "./FooterDesktop.css";
import tedxQuLogo from "../../public/TEDxQu-Logo.png"; // Import the logo image
import twitterIcon from "../../public/twitter.png"; // Import the social media icons
import facebookIcon from "../../public/facebook.png";
import instagramIcon from "../../public/instagram.png";
import linkedinIcon from "../../public/linkedin.png";

function FooterDesktop() {
    return (
        <>
            <div className="footer desktop">
                <div className="main-part desktop">
                    <div className="logo_and_text desktop">
                        <img src={tedxQuLogo} alt="TEDxQu Logo" />
                        <p>
                            Step into the world of 'Evolution in Action: How the Past Shapes
                            the Future,' our captivating TEDx event. As we unravel the fabric
                            of history's influence on our present, we ignite a passion for
                            knowledge and innovation. With a focus on diverse fields, we
                            explore their evolution, offering fresh perspectives for the
                            journey ahead. Join us as we bridge the gap between eras,
                            crafting a tapestry of ideas that fuels our collective drive
                            toward meaningful change.
                        </p>
                    </div>
                    <div className="social-media desktop">
                        <span>Follow TED on</span>
                        <div className="icons desktop">
                            <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer">
                                <img src={twitterIcon} alt="Twitter Icon" />
                                <span>twitter</span>
                            </a>
                            <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="Facebook Icon" />
                                <span>facebook</span>
                            </a>
                            <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="Instagram Icon" />
                                <span>instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn Icon" />
                                <span>linkedin</span>
                            </a>
                        </div>
                    </div>
                    <div className="links">
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
                        </ul>
                    </div>
                </div>
            </div>
            <div className="second-part desktop">
                <hr />
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>
        </>
    );
}

export default FooterDesktop;
