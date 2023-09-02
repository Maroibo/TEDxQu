import "./SpeakerDesktop.css"
function Speaker(props) {
    return (
        <>
            <img className="speaker-photo" src={props.imageLarge} alt="" />
            <div className="speaker-content">
                <h2 className="speaker-name">{props.name}</h2>
                <div className="after-name"><span>How to become a Superspecialist</span>
                </div>
                <div className="main-speaker-text">        <p>
                    {props.brief}
                </p>
                    <div className="line speaker"></div>
                    <div className="social-media desktop-speaker">
                        <p>Follow <span>{props.name}</span> on</p>
                        <div className="icons desktop-speaker">
                            {props.twitter && <a href={props.twitter} target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /><span>twitter</span></a>}
                            {props.facebook && <a href={props.facebook} target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /><span>facebook</span></a>}
                            {props.instagram && <a href={props.instagram} target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /><span>instagram</span></a>}
                            {props.linkedin && <a href={props.linkedin} target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /><span>linkedin</span></a>}
                        </div>
                    </div>
                </div></div>

        </>
    )
}
export default Speaker;