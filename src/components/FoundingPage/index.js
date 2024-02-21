import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar';
import './index.css'

const FoundingPage = () => (
    <>
    <Navbar />
    <div className="founding-page" id="founding">
        <div className="founding-page-bg">
            <h1 className="founding-page-main-heading" data-aos="fade-down" data-aos-duration="900">Our Founding Story</h1>
        </div>
        <div className="founding-page-content-container">
            <p className="founding-page-main-para" data-aos="zoom-in" data-aos-duration="800">At ShiniUnicorns Solar Technologies, our journey began with a singular vision to make a meaningful impact in the lives of farmers and address the challenges they face. Our founding story is a testament to our commitment to innovation, sustainability, and practicality</p>
            <div className="time-line-container">
                <div>
                    <h1 className="founding-page-heading">The Beginning</h1>
                    <p className="founding-page-para" data-aos="zoom-in-up">Founded with the mission to address the challenges faced by farmers, including low product prices and significant post-harvest losses</p>
                </div>
                <div>
                    <h1 className="founding-page-heading">The Vision</h1>
                    <p className="founding-page-para" data-aos="zoom-in-up">Recognizing the need for a sustainable solution, our journey began with the development of the impinging jet solar air heater, a groundbreaking innovation in drying technology</p>
                </div>
                <div>
                    <h1 className="founding-page-heading">Our Journey</h1>
                    <p className="founding-page-para" data-aos="zoom-in-up">Since our inception, we have been on a relentless pursuit to integrate innovation with practicality, shaping a future where agriculture and industry coexist harmoniously with the environment</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
)

export default FoundingPage