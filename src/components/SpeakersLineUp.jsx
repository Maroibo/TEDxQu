import "./SpeakersLineUp.css"
import SpeakerCard from "./SpeakerCard";
function SpeakersLineUp() {
    const speakers = [
        {
            name: "Reham Bani Huthail",
            talkTittle: "React Hooks",
            image: "../../public/speakers/low-res/image00001-min.jpeg",
        },
        {
            name: "Sama El-Dori",
            talkTittle: "React Native",
            image: "../../public/speakers/low-res/IMG_5640-min.jpg",
        },
        {
            name: "Shada Benhbaia",
            talkTittle: "React Context",
            image: "../public/speakers/low-res/IMG_5695-min.jpg",
        },
        {
            name: "Lubaba Youssef",
            talkTittle: "React Redux",
            image: "../../public/speakers/low-res/IMG_5714-min.jpg",
        },
        {
            name: "Hissa Al-Suwaidi",
            talkTittle: "React Redux",
            image: "../../public/speakers/low-res/IMG_5741-min.jpg",
        },
        {
            name: "Aisha Al-Rumaihi",
            talkTittle: "React Redux",
            image: "../../public/speakers/low-res/IMG_5811-min.jpg",
        },
        {
            name: "Dr-Khalid Al-Kanji",
            talkTittle: "React Redux",
            image: "../../public/speakers/low-res/IMG_7184 -min.jpg",
        },
    ];
    const speakerCards = speakers.map((speaker, index) => {
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