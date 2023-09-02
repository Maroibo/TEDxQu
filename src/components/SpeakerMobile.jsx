import "./Speaker.css"
function Speaker(props) {
    return (
        <>
            <img className="speaker-photo" src={props.imageLarge} alt="" />
            <div className="speaker-content">
                <h2 className="speaker-name">{props.name}</h2>
                <div className="after-name"><span>{props.talkTittle}</span>
                    <div className="social-media">        <div className="icons">
                        {props.twitter && <a href={props.twitter} target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /></a>}
                        {props.facebook && <a href={props.facebook} target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /></a>}
                        {props.instagram && <a href={props.instagram} target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /></a>}
                        {props.linkedin && <a href={props.linkedin} target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /></a>}
                    </div>
                    </div></div>
                <p>
                    {props.brief}
                </p>
            </div>
        </>
    )
}
export default Speaker;