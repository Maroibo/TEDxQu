
import "./FooterMobile.css";

// Import social media icons
import twitterIcon from "../../public/twitter.png";
import facebookIcon from "../../public/facebook.png";
import instagramIcon from "../../public/instagram.png";
import linkedinIcon from "../../public/linkedin.png";
import tedxLogo from "../../public/TEDxQu-Logo.png";

function FooterMobile() {
    return (
        <div className="footer">
            <div className="main-part">
                <img src={tedxLogo} alt="TEDxQu Logo" />
                <div className="social-media">
                    <span>Follow TED on</span>
                    <div className="icons">
                        <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="Twitter Icon" />
                        </a>
                        <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="Facebook Icon" />
                        </a>
                        <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer">
                            <img src={instagramIcon} alt="Instagram Icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn Icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="second-part">
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>
        </div>
    );
}

export default FooterMobile;
