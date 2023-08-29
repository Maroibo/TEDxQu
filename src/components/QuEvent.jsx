import React from "react";
import { Link } from "react-router-dom";
import calendarIcon from "../../public/calendar-solid 1.svg";
import locationIcon from "../../public/location-dot-solid 1.svg";
import "./QuEvent.css";

function AboutTed() {
    return (
        <div className="QuEventcontainer">
            <h2>Qu Event</h2>
            <div className="content">
                <div className="segment">
                    <div className="desktopOnly line"></div>
                    <div className="dates">
                        <p>
                            <img className="desktopOnly" src={calendarIcon} alt="Calendar Icon" />06/09/2023
                        </p>
                        <p>
                            <img src={locationIcon} className="desktopOnly" alt="Location Icon" />Activities Building I11, Qatar University
                        </p>
                    </div>
                </div>
                <p>
                    Welcome to <Link to="tedxqu"><span>QU Event</span></Link>, an engaging and thought-provoking
                    TEDx event that explores the theme of <Link to="tedxqu#main-theme-text"><span>&quot;Evolution in Action:
                        How the Past Shapes the Future.&quot;</span></Link> Join us on <span>09/09/2023</span>
                    in the vibrant city of <span>Doha</span> as we embark on a captivating journey
                    of knowledge and inspiration.
                </p>
            </div>
        </div>
    );
}

export default AboutTed;
