import React from 'react'
import Navbar from '../Navbar'
import { GiAchievement } from "react-icons/gi";
import Slider from 'react-slick'
import Footer from '../Footer'

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

const AchievementPage = () => (
    <>
        <Navbar />
        <div className="achievements-page" id="achievements">
            <div className="achievement-page-bg">
                <h1 className="achievement-page-heading" data-aos="fade-down" data-aos-duration="900">Achievements</h1>
            </div>
            <div className="achievement-page-container">
                <h1 className="achivement-page-sub-heading">Our Achievements</h1>
                <div className="achievement-section-content-container">
                    <div className="achievement-container" data-aos="fade-right">
                        <GiAchievement size={40} className="achievement-icon" color="#FFD700" />
                        <h1 className="achievement">Winner of Onion Grand Challenge</h1>
                    </div>
                    <div className="achievement-container"data-aos="fade-right">
                        <GiAchievement size={40} className="achievement-icon" color="#C0C0C0" />
                        <h1 className="achievement">Runner up Award in Startup Mania 8.0- TBI@KEC</h1>
                    </div>
                </div>
                <AchievementSlider />
            </div>
        </div>
        <Footer />
    </>
)

export default AchievementPage