import React from "react";
import Footer from '../Footer'
import Navbar from '../Navbar';
import './index.css'



const ContactPage = () => (
    <>
    <Navbar />
    <div className="contact-page" id="contact">
        <div className="contact-page-bg">
            <h1 className="contact-page-heading" data-aos="fade-down" data-aos-duration="900">Contact Us</h1>
        </div>
        <div className="contact-page-container">
            <div className="contact-container">
                <h1 className="contact-page-heading2">Get in Touch</h1>
                <p className="contact-para2">
                    Email Us:
                    <br />
                    <a className="email-anchor" href="mailto:contact@shiniunicorns.com" rel="noreferrer">contact@shiniunicorns.com</a>
                </p>
                <div className="contact-para2">
                    Call Us:
                    <br />
                    <p style={{margin: '0px', fontWeight: '400'}}>+919789757178</p>
                </div>
                <div className="contact-para2">
                    Visit Us:
                    <br />
                    <p style={{margin: '0px', fontWeight: '400'}}>
                        Incubatee @ Jansons Institute of Technology, SF NO 443/1,2,442/1A,442/1B Karumathampatti Coimbatore, 641659, Tamilnadu, India.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
)

export default ContactPage