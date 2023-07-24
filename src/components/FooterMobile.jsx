import "./FooterMobile.css"
function FooterMobile() {
    return (
        <div className="footer">
            <div className="main-part">
                <img src="../../public/TEDxQu-Logo.png" alt="" />
                <div className="social-media">
                    <span>Follow TED on</span>
                    <div className="icons">
                        <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /></a>
                        <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /></a>
                        <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /></a>
                        <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="second-part">
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>
        </div>
    )
}
export default FooterMobile