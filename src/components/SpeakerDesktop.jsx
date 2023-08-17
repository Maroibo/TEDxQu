import "./SpeakerDesktop.css"
function Speaker() {
    return (
        <>
        <img className="speaker-photo" src="../../public/image.png" alt="" />
        <div className="speaker-content">
        <h2 className="speaker-name">Janie Page</h2>
        <div className="after-name"><span>How to become a Superspecialist</span>
        </div>
        <div className="main-speaker-text">        <p>
        An enthusiastic curator of people, 
        patterns and stories, her current 
        interest lies in the anatomy of transformation 
        and innovation. Her work sits at intersection
         of ancient wisdom, living systems and 
         indigenous community practices, digital 
         and emerging technologies. She Is co-Founder 
         of Ism.Earth and Artist in Residence at SBCAST
          (Santa Barbara Centre for Art Science and
           Technology). She was recently an Artist 
           in Residence at The Design Science Studio
            (with the Buckminster Fuller Institute) 
            and the Living Collaboratory a partnership
            between the Design Science Studio and the 
            Emergent Media 
        Lab at The University of California Irvine.  
        </p>
        <div className="line speaker"></div>
        <div className="social-media desktop-speaker">   
        <p>Follow <span>Janie Page</span> on</p>     
        <div className="icons desktop-speaker">
        <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /><span>twitter</span></a>
                            <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /><span>facebook</span></a>
                            <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /><span>instagram</span></a>
                            <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /><span>linkedin</span></a>
        </div>
        </div>
        </div></div>

        </>
    )
}
export default Speaker;