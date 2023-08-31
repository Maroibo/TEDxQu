import "./JoinUs.css"
function JoinUs() {
    function handleClick() {
        window.open("https://quqa.campuslabs.com/engage/submitter/form/step/1?Guid=bb877911-29f6-41c2-9d0a-1076b2a174a3");
    }
    return (
        <div className="JoinUscontainer">
            <h2>
                Join Us
            </h2>
            <p>
                Thank you for your interest in being a part of QU Event! We welcome both speakers and attendees who are passionate about the power of ideas and the impact of knowledge-sharing. Whether you have a unique story to share, groundbreaking research to present, or simply a thirst for
                inspiration, we invite you to join us on this incredible journey.
            </p>
            <div className="buttonDiv">
                <button onClick={handleClick}>Join as Attendee</button>
            </div>

        </div>
    )
}

export default JoinUs;