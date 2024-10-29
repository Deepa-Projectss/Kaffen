import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import './header.css'


export default function Heading() {
    const Headers = () => {
        return (
            <div className="kaffen-page">
                <div className="opening-head">
                    <div className="openin-hours">
                        <i className="bi bi-clock clock-icons" > </i>
                        <text style={{ color: '#b99272', }}>Opening hours :</text>
                        <text style={{ color: '#FFFFFF', padding: '2px' }}>08:00 am - 09:00 pm</text>

                    </div>

                    <div className="social-medias">
                        <a href="/"><i className="bi bi-facebook" style={{ color: '#FFFFFF' }}></i></a>
                        <a href=""><i className="bi bi-twitter" style={{ color: '#FFFFFF' }}></i></a>
                        <a href=""><i className="bi bi-instagram" style={{ color: '#FFFFFF' }}></i></a>
                        <a href=""><i className="bi bi-youtube" style={{ color: '#FFFFFF' }}></i></a>
                    </div>
                    <div>
                        <i className="bi bi-geo-alt-fill location" >Location:</i>
                        <text className="location-text">55 main street, new york</text>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {Headers()}
        </div>
    )
}