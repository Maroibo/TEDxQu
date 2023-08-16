import "./FooterDesktop.css"
function FooterDesktop() {
    return (
        <>
            <div className="footer desktop">
                <div className="main-part desktop">
                    <div className="logo_and_text">                <img src="../../public/TEDxQu-Logo.png" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Alias ab dolorem facere qui unde,
                            velit aliquid impedit ratione earum hic asperiores
                            magni sint iste, itaque eius! Corporis libero molestias sit!
                        </p></div>

                    <div className="social-media desktop">
                        <span>Follow TED on</span>
                        <div className="icons desktop">
                            <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /><span>twitter</span></a>
                            <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /><span>facebook</span></a>
                            <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /><span>instagram</span></a>
                            <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /><span>linkedin</span></a>
                        </div>
                    </div>
                    <div className="links">
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
                        </ul>
                    </div>
                </div>
            </div>
            <div className="second-part desktop">
                <hr />
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>
        </>
    )
}
export default FooterDesktop