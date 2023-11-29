import React from "react";
import Twit from '../images/twit.jpg';
import Face from '../images/face.jpg';
import Insta from '../images/insta.jpg';
import Github from '../images/github.png';

export default function Footer() {

    return (
        <div className="footer">
            <img src={Twit} class="img" alt="twitter" />
            <img src={Face} class="img" alt="facebook" />
            <img src={Insta} class="img" alt="linkedin" />
            <img src={Github} class="img" alt="github" />
        </div>
    )
}