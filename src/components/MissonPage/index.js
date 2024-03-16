import React from "react";
import Footer from '../Footer'
import Navbar from '../Navbar';
import './index.css'

const MissionPage = () => (
    <>
    <Navbar />
    <div className="mission-page" id="missionvision">
        <div className="misison-page-bg">
            <h1 className="mission-page-main-heading" data-aos="fade-down" data-aos-duration="900">Our <span className="mission-page-span">Vision & Mission</span> for a Sustainable Tomorrow</h1>
        </div>
        <div className="mission-page-content-container">
            <p className="misison-page-welcome-para" data-aos="zoom-in" data-aos-duration="800">At ShiniUnicorns Solar Technologies, we are committed to shaping a brighter and more sustainable future for agriculture and industry. Our mission, encapsulated in the phrase "Use Shine, Make It Fine," drives our dedication to innovation and progress.</p>
            <h1 className="misson-page-heading">Our Vision</h1>
            <div className="mission-container">
                <div className="mission-page-image2"></div>
                <div className="mission-content-container">
                    <h1 className="vision-heading" data-aos="fade-left">Empowering Farmers and Industries</h1>
                    <p className="vision-para" data-aos="fade-left">We envision a future where farmers and industries alike are empowered by our technologies, leading to a reduction in post-harvest losses, minimized energy consumption, and enhanced economic prosperity on a global scale</p>
                </div>
            </div>
            <h1 className="misson-page-heading">Our Mission</h1>
            <div className="mission-container">
                <div className="mission-content-container">
                    <h1 className="mission-heading" data-aos="fade-right">Revolutionizing Agriculture and Industry</h1>
                    <p className="mission-para" data-aos="fade-right">We are dedicated to revolutionizing agriculture and industrial process heating through the development and implementation of cutting-edge drying technologies</p>
                </div>
                <div className="mission-page-image"></div>
            </div>
        </div>
        <Footer />
    </div>
    </>
)

export default MissionPage