import React from 'react'
import { Button } from '@mui/material';
import { MdOutlineFileDownload, MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Footer from '../Footer';
import Navbar from '../Navbar';
import './index.css'

const AchievementSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        arrows: false
    };

    return (
        <div className="achievement-section-slider-container">
            <Slider {...settings}>
                <div className="achievement-image-container">
                    <img src="/images/achievement1.jpg" alt="achievement" className="achievement-image" />
                </div>
                <div className="achievement-image-container">
                    <img src="/images/achievement2.jpg" alt="achievement" className="achievement-image" />
                </div>
                <div className="achievement-image-container">
                    <img src="/images/achievement3.jpg" alt="achievement" className="achievement-image" />
                </div>
                <div className="achievement-image-container">
                    <img src="/images/achievement4.jpg" alt="achievement" className="achievement-image" />
                </div>
            </Slider>
        </div>
    )
}

const HomePage = () => (
        <>
        <Navbar />
        <div className="home-page" id="home">
            <div className="landing-section landing-section-mobile-bg">
                <div className="landing-section-content-container">
                    <h1 className="landing-section-heading" data-aos="fade-down" data-aos-duration="800">Empowering Agriculture & Industry with Sustainable Solar Solutions</h1>
                    <p className="landing-section-para" data-aos="fade-up" data-aos-delay="500">We're on a mission to transform the way agriculture and industry harness energy. Our innovative solar solutions are designed to empower farmers and industries, reduce environmental impact, and drive economic prosperity.</p>
                    <div className="landing-section-button-container">
                        <a href="shiniunicorns-brochure.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button variant="contained" data-aos="zoom-in-up" data-aos-delay="700" className="landing-button" size="large" sx={{backgroundColor: '#242222', marginTop: '10px', textTransform: 'none', '&:hover': {background: 'green'} }}>Download Brochure <MdOutlineFileDownload size={20} style={{marginLeft: '6px'}} /></Button></a>
                        <a href="shiniunicorns-reference.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button variant="contained" data-aos="zoom-in-up" data-aos-delay="800" className="landing-button" size="large" sx={{backgroundColor: '#242222', marginTop: '10px', textTransform: 'none', '&:hover': {background: 'green'} }}>Explore <MdArrowOutward size={20} style={{marginLeft: '8px'}} /></Button></a>
                    </div>
                </div>
                <div className="landing-image" data-aos-duration="500"></div>
            </div>
            <div className="why-choose-us">
                <div className="landing-section-content-container">
                    <h1 className="why-choose-heading">Why Shine with ShiniUnicorns?</h1>
                    <div className="why-choose-shadow-container" data-aos="fade-right">
                        <button className="check-button"><FaCheck size={20} /></button>
                        <div>
                            <h1 className="why-choose-sub-heading">Unlock Solar Power</h1>
                            <p className="why-choose-para">Our cutting-edge solar tech optimizes agriculture and industry, reducing costs and environmental impact</p>
                        </div>
                    </div>
                    <div className="why-choose-shadow-container" data-aos="fade-right">
                        <button className="check-button"><FaCheck size={20} /></button>
                        <div>
                            <h1 className="why-choose-sub-heading">Shaping Sustainable Futures</h1>
                            <p className="why-choose-para">Join us in shaping sustainable futures with our innovative solar air heater and customizable business models.</p>
                        </div>
                    </div>
                    <div className="why-choose-shadow-container" data-aos="fade-right">
                        <button className="check-button"><FaCheck size={20} /></button>
                        <div>
                            <h1 className="why-choose-sub-heading">Customizable Solutions</h1>
                            <p className="why-choose-para">Tailored to meet your unique needs and sustainability goals.</p>
                        </div>
                    </div>
                </div>
                <div className="whychoose-image-container">
                    <div className="why-choose-image1"></div>
                    <div className="why-choose-image2"></div>
                </div>
            </div>
            <div className="product-section">
                <h1 className="why-choose-heading2">Our Expertise</h1>
                <div className="product-section-image-container">
                    <div className="product-section-image1">
                        <h1 className="product-heading">Solar Air Heating Systems</h1>
                        <Link className="link-element" to="/product"><RiExternalLinkFill color="#ffffff" size={30} /></Link>
                    </div>
                    <div className="product-section-image2">
                        <h1 className="product-heading">Solar Water Heating Systems</h1>
                        <Link className="link-element" to="/product"><RiExternalLinkFill color="#ffffff" size={30} /></Link>
                    </div>
                    <div className="product-section-image3">
                        <h1 className="product-heading">Solar PV Systems</h1>
                        <Link className="link-element" to="/product"><RiExternalLinkFill color="#ffffff" size={30} /></Link>
                    </div>
                </div>
            </div>
            <div className="achievement-section" id="achievementSection">
                <h1 className="achievement-heading">Our Achievements</h1>
                <div className="achievement-parent-container">
                    <div className="achievement-section-content-container">
                        <div className="achievement-container" data-aos="fade-right">
                            <GiAchievement size={40} className="achievement-icon" color="#FFD700" />
                            <h1 className="achievement a1">Winner of Onion Grand Challenge</h1>
                        </div>
                        <div className="achievement-container"data-aos="fade-right">
                            <GiAchievement size={40} className="achievement-icon" color="#C0C0C0" />
                            <h1 className="achievement a1">Runner up Award in Startup Mania 8.0- TBI@KEC</h1>
                        </div>
                    </div>
                    <AchievementSlider />
                </div>
            </div>
            <div className="join-us-section">
                <h1 className="joinus-heading" data-aos="fade-down">Join Us in Shaping a Brighter Future</h1>
                <p className="joinus-para" data-aos="fade-up">Partner with ShiniUnicorns Solar Technologies and join us in shaping a brighter, more sustainable future. Together, let's harness the power of the sun to drive positive change and create lasting impact.</p>
            </div>
            <Footer />
        </div>
        </>
)



export default HomePage