import React from "react";

import Navbar from "../Navbar";
import Footer from '../Footer'

import './index.css'

const KnowledgeCenter = () => (
    <>
        <Navbar />
        <div className="knowledge-center-page" id="knowledge">
            <div className="knowledge-center-landing-container">
                <h1 className="knowledge-center-heading" data-aos="fade-down" data-aos-duration="900">Knowledge Center</h1>
            </div>
            <ul className="knowledge-center-book-container">
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
                    <a href="shiniunicorns-reference.pdf" target="_blank" rel="noreferrer" className="book-anchor book13"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
                    <a href="book2.pdf" target="_blank" rel="noreferrer" className="book-anchor book2"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="350">
                    <a href="book1.pdf" target="_blank" rel="noreferrer" className="book-anchor book1"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800">
                    <a href="book3.pdf" target="_blank" rel="noreferrer" className="book-anchor book3"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="350">
                    <a href="book4.pdf" target="_blank" rel="noreferrer" className="book-anchor book4"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
                    <a href="book5.pdf" target="_blank" rel="noreferrer" className="book-anchor book5"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800">
                    <a href="book6.pdf" target="_blank" rel="noreferrer" className="book-anchor book6"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="350">
                    <a href="book7.pdf" target="_blank" rel="noreferrer" className="book-anchor book7"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
                    <a href="book8.pdf" target="_blank" rel="noreferrer" className="book-anchor book8"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800">
                    <a href="book9.pdf" target="_blank" rel="noreferrer" className="book-anchor book9"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="350">
                    <a href="book10.pdf" target="_blank" rel="noreferrer" className="book-anchor book10"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
                    <a href="book11.pdf" target="_blank" rel="noreferrer" className="book-anchor book11"> </a>
                </li>
                <li className="book-list-element" data-aos="fade-down" data-aos-duration="800">
                    <a href="book12.pdf" target="_blank" rel="noreferrer" className="book-anchor book12"> </a>
                </li>
            </ul>
        </div>
        <Footer />
    </>
)


export default KnowledgeCenter;