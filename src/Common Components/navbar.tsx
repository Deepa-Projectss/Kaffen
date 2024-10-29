import React from "react";
import './navbar.css';
import kaffenLogo from '../Images/kaffenlogo.png'

export default function Navbar() {
    return (
        <div className="cafe-navbar" >
            <div className="kaffen-logo">
                <img src={kaffenLogo} alt="Kaffen Logo" className="kaffen-img" />
            </div>
            <div>
                <nav style={{ display: 'flex', justifyContent: 'center' }} >
                    <ul>
                        <li className="dropdown">
                            <a href="#">HOME</a>
                            <i className="bi bi-chevron-down downwards"></i>
                            <ul className="dropdown-content">
                                <li><a href="#">COFFEE HOUSE</a></li>
                                <li><a href="#">COFFEE RESTAURANT</a></li>
                            </ul>
                        </li>
                        <li><a href="#">ABOUT</a></li>
                        <li className="dropdown">
                            <a href="#">MENU</a>
                            <i className="bi bi-chevron-down downwards"></i>
                            <ul className="dropdown-content">
                                <li><a href="#">MENU COFFEE</a></li>
                                <li><a href="#">MENU RESTAURANT</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">PAGES</a>
                            <i className="bi bi-chevron-down downwards"></i>
                            <ul className="dropdown-content">
                                <li><a href="#">SERVICE</a></li>
                                <li><a href="#">RESERVATION</a></li>
                                <li><a href="#">HISTORY</a></li>
                                <li><a href="#">OUR CHEFS</a></li>
                                <li><a href="#">GALLERY</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                            <i className="bi bi-chevron-down downwards" ></i>
                            <ul className="dropdown-content">
                                <li><a href="#">BLOG GRID</a></li>
                                <li><a href="#">BLOG STANDARD</a></li>
                                <li><a href="#">BLOG SINGLE</a></li>
                            </ul>
                        </li>
                        <li><a href="#">CONTACTS</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="booking-btn">BOOK A TABLE</button>
            </div>
        </div>
    )
}



