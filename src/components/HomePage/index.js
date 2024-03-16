import React from 'react'
import { Button } from '@mui/material';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import HorizontalScroll from "../HorizontalScroll";
import Navbar from '../Navbar';
import './index.css'

const HomePage = () => (
        <>
        <Navbar />
        <div className="home-page" id="home">
            <HorizontalScroll />
            <div className="landing-section landing-section-mobile-bg">
                <div className="landing-section-content-container">
                    <h1 className="landing-section-heading" data-aos="fade-down" data-aos-duration="800">Empowering Agriculture & Industry with Sustainable Solar Solutions</h1>
                    <p className="landing-section-para" data-aos="fade-up" data-aos-delay="500">We're on a mission to transform the way agriculture and industry harness energy. Our innovative solar solutions are designed to empower farmers and industries, reduce environmental impact, and drive economic prosperity.</p>
                    <div className="landing-section-button-container">
                        <a href="shiniunicorns-brochure.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button variant="contained" data-aos="zoom-in-up" data-aos-delay="700" className="landing-button" size="large" sx={{backgroundColor: '#242222', marginTop: '10px', marginBottom: '8px', textTransform: 'none', '&:hover': {background: 'green'} }}>Download Brochure <MdOutlineFileDownload size={20} style={{marginLeft: '6px'}} /></Button></a>
                        {/* <a href="shiniunicorns-reference.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button variant="contained" data-aos="zoom-in-up" data-aos-delay="800" className="landing-button" size="large" sx={{backgroundColor: '#242222', marginTop: '10px', marginBottom: '8px', textTransform: 'none', '&:hover': {background: 'green'} }}>Explore <MdArrowOutward size={20} style={{marginLeft: '8px'}} /></Button></a> */}
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
                    <div className="product-section-image3">
                        <h1 className="product-heading">Solar Water Heating Systems</h1>
                        <Link className="link-element" to="/product"><RiExternalLinkFill color="#ffffff" size={30} /></Link>
                    </div>
                    <div className="product-section-image2">
                        <h1 className="product-heading">Solar PV Systems</h1>
                        <Link className="link-element" to="/product"><RiExternalLinkFill color="#ffffff" size={30} /></Link>
                    </div>
                </div>
            </div>
            <div className="achievement-section" id="achievementSection">
               <h1 className="sdg-heading">SDG Goals</h1>
               <p className="sdg-para" data-aos="fade-down">Team Shini Unicorns is dedicated to our mission of 'Use Shine, Make It Fine.' Our unwavering commitment is to empower farmers by providing them with cutting edge drying technologies, enabling them to elevate their agricultural products to international standards. Our primary focus is on minimizing post-harvest losses, thus ensuring the economic well-being of farmers and contributing to sustainable development goals.</p>
               <div className="sdg-goals-container">
                    <div className="sdg-item sdg-item-7" data-aos="fade-down">
                        <div className="sdg-overlay">
                            <a href="Goal-7_Fast-Facts(1).pdf" target='_blank' rel='noreferrer'><RiExternalLinkFill color="#ffffff" size={30} /></a>
                        </div>
                    </div>
                    <div className="sdg-item sdg-item-9" data-aos="fade-down">
                        <div className="sdg-overlay">
                             <a href="2309739_E_SDG_2023_infographics-9-9.pdf" target='_blank' rel='noreferrer'><RiExternalLinkFill color="#ffffff" size={30} /></a>
                        </div>
                    </div>
                    <div className="sdg-item sdg-item-12" data-aos="fade-down">
                        <div className="sdg-overlay">
                            <a href="2309739_E_SDG_2023_infographics-12-12.pdf" target='_blank' rel='noreferrer'><RiExternalLinkFill color="#ffffff" size={30} /></a>
                        </div>
                    </div>
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