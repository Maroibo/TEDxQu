import "./Speaker.css"
function Speaker() {
    return (
        <>
        <img className="speaker-photo" src="../../public/image.png" alt="" />
        <div className="speaker-content">
        <h2 className="speaker-name">Janie Page</h2>
        <div className="after-name"><span>How to become a Superspecialist</span>
        <div className="social-media">        <div className="icons">
                        <a href="https://twitter.com/tedxqu" target="_blank" rel="noreferrer"><img src="../../public/twitter.png" alt="" /></a>
                        <a href="https://www.facebook.com/TEDxQatarUniversity/" target="_blank" rel="noreferrer"><img src="../../public/facebook.png" alt="" /></a>
                        <a href="https://www.instagram.com/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/instagram.png" alt="" /></a>
                        <a href="https://www.linkedin.com/company/tedxqu/" target="_blank" rel="noreferrer"><img src="../../public/linkedin.png" alt="" /></a>
        </div>
        </div></div>
        
        <p>
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
        </div>
        </>
    )
}
export default Speaker;