import "./SpeakersLineUp.css"
import SpeakerCard from "./SpeakerCard";
function SpeakersLineUp() {
    const speakers = [
        {
            name: "John Doe",
            talkTittle: "React Hooks",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Jane Doe",
            talkTittle: "React Native",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "James Doe",
            talkTittle: "React Context",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Jenny Doe",
            talkTittle: "React Redux",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Jenny Doe",
            talkTittle: "React Redux",
            image: "https://picsum.photos/200/300",
        },
    ];
    const speakerCards = speakers.map((speaker,index) => {
        return (
        <SpeakerCard
            key={index}
            name={speaker.name}
            talkTittle={speaker.talkTittle}
            image={speaker.image}
        />
        );
    });
    return (
        <div className="SpeakersLineUpContainer">
            <h2>
            Speakers Line Up
            </h2>
            <div className="speakers-container">
                {speakerCards}
            </div>
        </div>
    )
}

export default SpeakersLineUp;