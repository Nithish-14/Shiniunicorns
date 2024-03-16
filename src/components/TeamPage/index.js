import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
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
                <div className="profile-card">
                    <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="600">Dr.M.M.Matheswaran</h1>
                    <a href="https://www.linkedin.com/in/matheswaran-mm-067ab412/" target="_blank" rel="noreferrer"><IoLogoLinkedin size={20} className="profile-anchor" color="0077b5" /></a>
                </div>
                <p className="team-page-description-para">Founder & Director</p>
                
                <div className="profile-card">
                    <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="600">Dr.S.Vijayan</h1>
                    <a href="https://www.linkedin.com/in/vijayanselvaraj/" target="_blank" rel="noreferrer"><IoLogoLinkedin size={20} className="profile-anchor" color="0077b5" /></a>
                </div>
                <p className="team-page-description-para">Co Founder & Technical head</p>
                <div className="profile-card">
                    <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="600">Mr.K.Subramani</h1>
                    <a href="https://www.linkedin.com/in/t-v-arjunan-25248b14/" target="_blank" rel="noreferrer"><IoLogoLinkedin size={20} className="profile-anchor" color="0077b5" /></a>
                </div>
                <p className="team-page-description-para">Head Operations</p>
                <div className="profile-card">
                    <h1 className="team-page-name-para" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="600">Dr.T.V.Arjunan</h1>
                </div>
                <p className="team-page-description-para">Technical Advicer</p>
            </div>
            <Footer />
        </div>
    </>
)

export default TeamPage