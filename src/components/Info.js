import React from "react";
import Hero from '../images/author3.jpg';
import Email from '../images/email.jpg';
import Link from '../images/link.png';

export default function Info() {

    return (
        <div className="info">
            <img src={Hero} alt="author" className="author-photo" />
            <h1 className="name">Antonio N. Sala</h1>
            <p className="title">Frontend Developer</p>
            <p className="website">antoniosala.online</p>
            <div className="btn">
                <button className="email">
                    <img src={Email} alt="email" />
                    <span>Email</span>
                </button>
                <button className="link">
                    <img src={Link} alt="link" />
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
    )
}