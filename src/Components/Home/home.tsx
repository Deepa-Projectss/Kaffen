import React from "react";
import './home.css';
import Heading from "../../Common Components/header";
import Navbar from "../../Common Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {

    const Headings = () => {
        return (
            <div>
                <div className="head">
                    <Heading />
                </div>
            </div>
        )
    }
    const Navbars = () => {
        return (
            <div className="nav-bar">
                <Navbar />
            </div>
        )
    }
    const CarouselCoffee = () => {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../../Images/barista3.jpg')} alt="First slide" />
                            <div className="caption">
                                <text className="heads">WELCOME TO THE KAFFEN</text><br />
                                <text className="sub-head">THE LONDON COFFEE HOUSE</text>
                            </div>
                            <div className="btns">
                                <button className="explore-btn">EXPLORE MORE <span><i className="bi bi-chevron-right"></i></span></button>
                                <button className="getdelivery-btn">GET DELIVERY <span><i className="bi bi-chevron-right"></i></span></button>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../../Images/barista2.jpg')} alt="Second slide" />
                            <div className="caption">
                                <text className="heads">WELCOME TO THE KAFFEN</text><br />
                                <text className="sub-head">THE PARIS COFFEE HOUSE</text>
                            </div>
                            <div className="btns">
                                <button className="explore-btn">EXPLORE MORE <span><i className="bi bi-chevron-right"></i></span></button>
                                <button className="getdelivery-btn">GET DELIVERY <span><i className="bi bi-chevron-right"></i></span></button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../../Images/barista0.jpg')} alt="Third slide" />
                            <div className="caption">
                                <text className="heads">WELCOME TO THE KAFFEN</text><br />
                                <text style={{ fontSize: '80px', fontWeight: 'bold', lineHeight: '1.2', color: ' #fff' }}>THE GREAT COFFEE GOOD VIBES</text>
                            </div>
                            <div className="btns">
                                <button className="explore-btn">EXPLORE MORE <span><i className="bi bi-chevron-right"></i></span></button>
                                <button className="getdelivery-btn">GET DELIVERY <span><i className="bi bi-chevron-right"></i></span></button>
                            </div>
                        </div>
                    </div>
                    {/* previous button */}
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <img src={require('../../Images/movebtn.png')} alt="Previous" className="custom-control-prev" />
                    </a>
                    {/* Next Button */}
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <img src={require('../../Images/movebtn.png')} alt="Next" className="custom-control-next flipped" />
                    </a>
                </div>
            </div>
        )
    }
    const AboutCafe = () => {
        return (
            <div className="about-cafe">
                <div>
                    <text className="aboutuss">ABOUT US</text>
                    <p className="cafe-para">
                        At KAFFEN, we believe in the magic of great food and coffee.
                        Our café is a cozy retreat for coffee lovers and food enthusiasts alike.
                        We pride ourselves on crafting exceptional beverages using the finest, sustainably sourced ingredients.
                        Our menu features a delightful array of freshly baked pastries, hearty breakfasts, and delicious lunch options, all made with love.
                        More than just a café, we are a community hub where creativity thrives and connections are made.
                        Whether you're catching up with friends, working on your next big idea, or simply enjoying a moment of peace, we invite you to relax and savor the experience.
                        Come visit us and discover your new favorite spot!
                    </p>
                    <div className="person-quotes" style={{ display: 'flex', marginLeft: '10%' }}>
                        <img src={require('../../Images/barista1.webp')} className="person-cir-img" alt="" />
                        <p className="quotes">“When you change your thoughts, remember to also change your world.” </p>
                    </div>
                </div>
                <div>
                    <img src={require('../../Images/coffee-img.png')} className="coffee-pic" alt="" />
                </div>
            </div>
        )
    }
    const CoffeeMenus = () => {
        return (
            <div className="menus-container" style={{ background: 'black' }}>
                <div className="Menus">
                    <div className="image-container">
                        <img src={require('../../Images/restaurantmenu-img.jpg')} alt="" className="images" />
                        <div className="restaurant-content">
                            <img src={require('../../Images/restaurantmenu-icon.png')} className="restaurant-icons" alt="" />
                            <p className="texts">Restaurant Menu</p>
                        </div>
                    </div>
                    <div className="img-border"></div>
                </div>
                <div className="Menus">
                    <div className="image-container">
                        <img src={require('../../Images/coffee-menu-img.jpg')} alt="" className="images" />
                        <div className="restaurant-content">
                            <img src={require('../../Images/coffeeCup-icon.webp')} className="coffee-icons" alt="" />
                            <p className="texts">Coffee Menu </p>
                        </div>
                    </div>
                    <div className="img-border"></div>
                </div>
                <div className="Menus">
                    <div className="image-container">
                        <img src={require('../../Images/food-service-img.jpg')} alt="" className="images" />
                        <div className="restaurant-content">
                            <img src={require('../../Images/foodservice-icon.png')} className="foodservice-icons" alt="" />
                            <p className="food-texts">Food Services</p>
                        </div>
                    </div>
                    <div className="img-border"></div>
                </div>
            </div>
        )

    }
    const PopularCoffees = () => {
        const backgroundImage = require('../../Images/background-images.jpg')
        return (
            <div className="popular-coffee" style={{ backgroundImage: `url(${backgroundImage})`, width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', }} >
                <div style={{ margin: '-5%' }}>
                    <p className="choose-coffee-text">Choose Best Coffee</p>
                    <p className="kaffen-coffee-menu">Kaffen Popular Coffee Menu</p>
                </div>
                <div className="coffee-menus-container">
                    {/* First Row */}
                    <div className="diff-coffee-cards" style={{ display: 'flex', gap: '20px' }}>
                        <div className="coffee-card" >
                            <div className="coffee-menu">
                                <img src={require('../../Images/americano-coffee-img.jpg')} className="coffee-images" alt="" />
                                <div className="coffee-menu-text" style={{ color: 'white' }}>
                                    <p>Americano Coffee</p>
                                    <p>2/3 espresso, 1/3 streamed milk</p>
                                    <p>------------------$4.9</p>
                                </div>
                            </div>
                        </div>
                        <div className="coffee-card" >
                            <div className="coffee-menu" style={{ display: 'flex' }}>
                                <img src={require('../../Images/espresso-coffee-img.jpg')} className="coffee-images" alt="" />
                                <div className="coffee-menu-text">
                                    <p>Espresso Coffee</p>
                                    <p>2/3 espresso, 1/3 streamed milk</p>
                                    <p>------------------$4.9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Row                                                                                                                                                                   */}
                    <div>
                        <div className="diff-coffee-cards" style={{ display: 'flex', gap: '20px' }}>
                            <div className="coffee-card" >
                                <div className="coffee-menu">
                                    <img src={require('../../Images/ice-cream-syrup.jpg')} className="coffee-images" alt="" />
                                    <div className="coffee-menu-text" style={{ color: 'white' }}>
                                        <p>Barista Pouring Syrup</p>
                                        <p>2/3 espresso, 1/3 streamed milk</p>
                                        <p>------------------$3.5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="coffee-card" >
                                <div className="coffee-menu" style={{ display: 'flex' }}>
                                    <img src={require('../../Images/cold-coffee.jpg')} className="coffee-images" alt="" />
                                    <div className="coffee-menu-text">
                                        <p>Cold - Coffee</p>
                                        <p>2/3 espresso, 1/3 streamed milk</p>
                                        <p>------------------$6.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Third Row */}
                    <div>
                        <div className="diff-coffee-cards" style={{ display: 'flex', gap: '20px' }}>
                            <div className="coffee-card" >
                                <div className="coffee-menu">
                                    <img src={require('../../Images/cappuccino-arabica.jpg')} className="coffee-images" alt="" />
                                    <div className="coffee-menu-text" style={{ color: 'white' }}>
                                        <p>Cappuccino Arabica</p>
                                        <p>2/3 espresso, 1/3 streamed milk</p>
                                        <p>------------------$2.8</p>
                                    </div>
                                </div>
                            </div>
                            <div className="coffee-card" >
                                <div className="coffee-menu">
                                    <img src={require('../../Images/milk-creame-coffee.jpg')} className="coffee-images" alt="" />
                                    <div className="coffee-menu-text">
                                        <p>Milk Cream Coffee</p>
                                        <p>2/3 espresso, 1/3 streamed milk</p>
                                        <p>------------------$7.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ background: 'black', marginTop: '10%', display: 'flex', alignItems: 'stretch' }}>
                        <img src={require('../../Images/girl-coffee-machine.jpg')} className="girl-coffee-img" style={{ height: '750px', width: '50%' }} alt="" />
                        <div style={{ marginTop: '13%', marginLeft: '5%' }}>
                            <p style={{ color: ' #b99272' }}>Why Choose Us</p>
                            <h1 style={{ color: 'white', fontSize: '45px', marginTop: '2%' }}>New London Coffee Founded For Extraordinary Test</h1>
                            <p style={{ color: 'white', marginTop: '5%', fontSize: '15px' }}>we blend quality with community, offering a cozy atmosphere where every cup of coffee is crafted with care.
                                Our menu features locally sourced ingredients, ensuring fresh and delicious options for everyone.
                                With friendly service and a commitment to sustainability!</p>
                            <div style={{ display: 'flex', marginTop: '2%' }}>
                                <img src={require('../../Images/coffee-bean-icon.png')} style={{ height: '70px' }} alt="" />
                                <p style={{ color: 'white', fontSize: '20px', paddingLeft: '5%', fontWeight: 'bold' }}>
                                    Natural Coffee Beans<br />
                                    <span style={{ fontSize: '14px', fontWeight: '100' }}>Natural coffee beans are carefully grown without synthetic chemicals, ensuring rich flavors and a pure, authentic coffee experience. Sourced sustainably, they offer superior quality and freshness in every cup.</span>
                                </p>
                            </div>
                            <div style={{ display: 'flex', marginTop: '2%' }}>
                                <img src={require('../../Images/coffee-cup-icon.png')} style={{ height: '70px' }} alt="" />
                                <p style={{ color: 'white', fontSize: '20px', paddingLeft: '5%', fontWeight: 'bold' }}>
                                    Natural Coffee Beans<br />
                                    <span style={{ fontSize: '14px', fontWeight: '100' }}>Natural coffee beans are carefully grown without synthetic chemicals, ensuring rich flavors and a pure, authentic coffee experience. Sourced sustainably, they offer superior quality and freshness in every cup.</span>
                                </p>
                            </div>
                            <div>
                                <button className="explore-more-btn">EXPLORE MORE <span><i className="bi bi-chevron-right"></i></span> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const DifferentCoffee = () => {
        return (
            <div style={{ background: '#090c0f', paddingTop: '10%' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="image-containers">
                        <img src={require('../../Images/diff-coffee1.jpg')} style={{ height: '500px', width: '100%' }} alt="" />
                        <div className="hover-text">Latte</div>
                        <div className="img-border1"></div>
                    </div>
                    <div className="image-containers" style={{ paddingTop: '5%', marginBottom: '10%' }}>
                        <img src={require('../../Images/diff-coffee-2.jpg')} style={{ height: '500px', width: '100%' }} alt="" />
                        <div className="hover-text1">Cappuccino</div>
                        <div className="img-border2"></div>
                    </div>
                    <div className="image-containers">
                        <img src={require('../../Images/diff-coffee-3.jpg')} style={{ height: '500px', width: '100%' }} alt="" />
                        <div className="hover-text">Iced Coffee</div>
                        <div className="img-border1"></div>
                    </div>
                </div>
            </div>
        )
    }

    const FeedBack = () => {
        const personDetails = [
            {
                id: '1',
                image: require('../../Images/person1.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '2',
                image: require('../../Images/person2.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '3',
                image: require('../../Images/person3.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '4',
                image: require('../../Images/person4.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '5',
                image: require('../../Images/person1.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '6',
                image: require('../../Images/person2.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            },
            {
                id: '7',
                image: require('../../Images/person3.jpg'),
                stars: '⭐⭐⭐⭐⭐',
                texts: 'The café offers a cozy atmosphere with a warm and welcoming ambiance. The menu features a great selection of coffee, teas, and freshly baked pastries. Service is prompt and friendly, making it an ideal spot for a casual meet-up or quiet study time. The outdoor seating adds a nice touch for enjoying a sunny day. Highly recommended for coffee lovers!',
                name: 'Fredrick S France',
                pro: 'Web Designer'
            }
        ]
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrow: false,
            dotsClass: "slick-dots",
        };

        return (
            <div className="feedback-container" style={{ background: 'black', overflowY: 'hidden', }}>
                <div >
                    <div style={{ textAlign: 'center', paddingTop: '10%' }}>
                        <span style={{ fontSize: '18px', color: '#b99272' }}>Customer Feedback</span>
                        <h1 style={{ color: '#fff' }}>What Our Clients Say</h1>
                    </div>
                </div>
                <div className="feedback-person">
                    <div>
                        <Slider {...settings}>
                            {personDetails.map((item) => (
                                <div key={item.id} style={{ width: '100%' }}>
                                    <div
                                        style={{
                                            background: "#333",
                                            color: "#fff",
                                            padding: "20px",
                                            borderRadius: "10px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                borderRadius: "50%",
                                                width: "80px",
                                                height: "80px",
                                                marginBottom: "10px",
                                            }}
                                        />
                                        <div style={{ fontSize: "20px", margin: "10px 0" }}>
                                            {item.stars}
                                        </div>
                                        <p style={{ fontSize: "14px", color: "#ddd" }}>{item.texts}</p>
                                        <h4 style={{ margin: "10px 0 5px", color: "#fff" }}>{item.name}</h4>
                                        <span style={{ color: "#b99272" }}>{item.pro}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {Headings()}
            {Navbars()}
            {CarouselCoffee()}
            {AboutCafe()}
            {CoffeeMenus()}
            {PopularCoffees()}
            {DifferentCoffee()}
            {FeedBack()}
        </div>
    )
}