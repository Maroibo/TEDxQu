import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import speakers from '../../data/speakers.json';
import './SpeakersCarosalMobile.css';

/* eslint-disable react/prop-types */
function SpeakersCarosalMobile() {
    // Define responsive settings for the carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="speakers-carousel-mobile">
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                centerMode={true}// Set infinite to true for looping back around
            >
                {speakers.map((speaker, index) => (
                    <div key={index} className="speaker-item">
                        <img src={speaker.img} alt={`Speaker ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default SpeakersCarosalMobile;
