import React from "react";
import Navbar from "../Navbar";
import Footer from '../Footer'
import './index.css'

const TeamPage = () => (
    <>
        <Navbar />
        <div className="team-page" id="team">
            <div className="team-page-bg">
                <h1 className="team-page-main-heading" data-aos="fade-down" data-aos-duration="900">Our Team</h1>
            </div>
            <div className="team-page-conent-container">
                <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="600">Dr.M.M.Matheswaran</h1>
                <p className="team-page-description-para">Founder & Director</p>
                <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="600">Dr.S.Vijayan</h1>
                <p className="team-page-description-para">Co Founder & Technical head</p>
                <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="600">Mr.K.Subramani</h1>
                <p className="team-page-description-para">Head Operations</p>
            </div>
            <Footer />
        </div>
    </>
)

export default TeamPage