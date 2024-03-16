import React, {useState, useContext} from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import NavContext from '../../NavContext';
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import './index.css'


const Navbar = () => {
    const [mobileDropDown, updateMobileDropDown] = useState(false);
    const {mobileNav, customUpdateNav} = useContext(NavContext);
    const location = useLocation();

    const aboutPagePaths = ["/mission-vision", "/value-commitment", "/founding-story", "/our-team"];


    const path = location.pathname;
    
    return (
        <>
            <nav className="navbar" id="navbar">
                <Link className="link-element" to="/">
                    <div className="navbar-logo-container">
                        <img src="/images/logo1.png" alt="website logo" className="navbar-logo" />
                        <p className="navbar-web-para">SHINIUNICORNS</p>
                    </div>
                </Link>
                <div className="nav-link-container">
                    <Link className="link-element custom-nav-width" to="/">
                        <button type="button" className={path === "/" ? "active-nav-link" : "nav-link"}>HOME</button>
                    </Link>
                    <div className="link-element custom-nav-width">
                        <div className="dropdown">
                            <div className="dropdown-button">
                                <button type="button" className={aboutPagePaths.includes(path) ? "active-nav-link" : "nav-link"}>ABOUT US</button>
                                <MdOutlineKeyboardArrowDown size={23} color="#7a7171" />
                            </div>
                            <div className="dropdown-menu">
                                <a className="dropdown-anchor" href="/mission-vision" rel='noreferrer'><MdKeyboardArrowRight className="dropdown-arrow" /> Our Vision and Mission</a>
                                <a className="dropdown-anchor" href="/value-commitment" rel='noreferrer'><MdKeyboardArrowRight className="dropdown-arrow" /> Core Values and Commitment to Sustainability</a>
                                <a className="dropdown-anchor" href="/founding-story" rel='noreferrer'><MdKeyboardArrowRight className="dropdown-arrow" /> Our Founding Story</a>
                                <a className="dropdown-anchor" href="/our-team" rel='noreferrer'><MdKeyboardArrowRight className="dropdown-arrow" /> Our Team</a>
                            </div>
                        </div>
                    </div>
                    <Link className="link-element custom-nav-width" to="/product">
                        <button type="button" className={path === "/product" ? "active-nav-link" : "nav-link"}>PRODUCTS</button>
                    </Link>
                    <Link className="link-element custom-nav-width" to="/achievements">
                        <button type="button" className={path === "/achievements" ? "active-nav-link" : "nav-link"}>ACHIEVEMENTS</button>
                    </Link>
                    <Link className="link-element custom-nav-width" to="/knowledge-center">
                        <button type="button" className={path === "/knowledge-center" ? "active-nav-link" : "nav-link"}>KNOWLEDGE CENTER</button>
                    </Link>
                    <Link className="link-element custom-nav-width" to="/contact">
                        <button type="button" className={path === "/contact" ? "active-nav-link" : "nav-link"}>CONTACT US</button>
                    </Link>
                </div>
                <button type="button" className="hamburger-menu" onClick={customUpdateNav}>
                    <RiMenu3Fill color="#000000" size={28} />
                </button>
            </nav>
            <div className={`mobile-view-navigation ${mobileNav ? "mobile-view-navigation-show" : ""}`}>
                <div className="navlink-mobile-view">
                        <Link className="link-element" to="/" onClick={customUpdateNav}>
                            <button type="button" className={`nav-link-mobile ${path === "/" ? "active-nav-link-mobile" : ""}`}>HOME</button>
                        </Link>
                        <hr />
                        <Link className="link-element">
                            <button type="button" onClick={() => updateMobileDropDown(prev => !prev)} className={`nav-link-mobile ${aboutPagePaths.includes(path) ? "active-nav-link-mobile" : ""}`}>ABOUT US <MdKeyboardArrowRight size={25} className={`dropdown-arrow-mobile ${mobileDropDown ? "rotate-mobile-arrow" : ""}`} /></button>
                        </Link>
                        <div className={`mobile-dropdown-container ${mobileDropDown ? "mobile-dropdown-container-show" : ""}`}>
                            <a className="dropdown-anchor" href="/mission-vision" rel='noreferrer' onClick={customUpdateNav}><MdKeyboardArrowRight className="dropdown-arrow" /> Our Vision and Mission</a>
                            <a className="dropdown-anchor" href="/value-commitment" rel='noreferrer' onClick={customUpdateNav}><MdKeyboardArrowRight className="dropdown-arrow" /> Core Values and Commitment to Sustainability</a>
                            <a className="dropdown-anchor" href="/founding-story" rel='noreferrer' onClick={customUpdateNav}><MdKeyboardArrowRight className="dropdown-arrow" /> Our Founding Story</a>
                            <a className="dropdown-anchor" href="/our-team" rel='noreferrer' onClick={customUpdateNav}><MdKeyboardArrowRight className="dropdown-arrow" /> Our Team</a>
                        </div>
                        <hr />
                        <Link className="link-element" to="/product" onClick={customUpdateNav}>
                            <button type="button" className={`nav-link-mobile ${path === "/product" ? "active-nav-link-mobile" : ""}`}>PRODUCTS</button>
                        </Link>
                        <hr />
                        <Link className="link-element" to="/achievements" onClick={customUpdateNav}>
                            <button type="button" className={`nav-link-mobile ${path === "/achievements" ? "active-nav-link-mobile" : ""}`}>ACHIEVEMENTS</button>
                        </Link>
                        <hr />
                        <Link className="link-element" to="/knowledge-center" onClick={customUpdateNav}>
                            <button type="button" className={`nav-link-mobile ${path === "/knowledge-center" ? "active-nav-link-mobile" : ""}`}>KNOWLEDGE CENTER</button>
                        </Link>
                        <hr />
                        <Link className="link-element" to="/contact" onClick={customUpdateNav}>
                            <button type="button" className={`nav-link-mobile ${path === "/contact" ? "active-nav-link-mobile" : ""}`}>CONTACT US</button>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar