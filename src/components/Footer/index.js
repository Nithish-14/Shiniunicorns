import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import './index.css'

const Footer = () => (
        <footer className="footer">
            <a href="#navbar" rel="noreferrer"><button type="button" className="rocket-button"><IoMdRocket size={25} /></button></a>
            <img src="/images/logo.jpg" alt="website logo" className="footer-image" />
            <h1 className="footer-heading">Shiniunicorns Solar Technologies Private Limited</h1>
            <div className="address-container">
                <IoLocationSharp color="#ffffff" size={25} style={{marginTop: '5px'}} className="footer-icon" />
                <p className="address-para">
                    Incubatee @ Jansons Institute of Technology, 
                    <br />
                    SF NO 443/1,2,442/1A,442/1B Karumathampatti Coimbatore, 641659,<br />
                    Tamilnadu, India.
                </p>
            </div>
            <div className="address-container2">
                <MdOutlineAlternateEmail color="#ffffff" size={25} style={{marginTop: '5px'}} className="footer-icon" />
                <a href="mailto:contact@shiniunicorns.com" rel="noreferrer" className="footer-contact-para">
                    contact@Shiniunicorns.com
                </a>
            </div>
            <div className="address-container2">
                <MdPhone color="#ffffff" size={25} style={{marginTop: '5px'}} className="footer-icon" />
                <p className="address-para">
                    +919789757178
                </p>
            </div>
            <hr style={{width: '100%', border: 'solid 1px #757171', marginBottom: '25px'}} />
            <p className="copyright-para">
                Copyright <FaRegCopyright style={{margin: '0px 7px'}} /> 2024 Shiniunicorns.
            </p>
            <p className="copyright-para">
                Designed & Developed by<span> <a href="https://phoenixteck2k23.infinityfreeapp.com/" target="_blank" className="parent-anchor" rel="noreferrer">Phoenix Tech</a></span>
            </p>
            <p className="copyright-para">All Rights Reserved</p>
        </footer>
)

export default Footer