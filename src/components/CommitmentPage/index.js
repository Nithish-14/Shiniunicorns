import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar';
import './index.css'

const CommitmentPage = () => (
    <>
    <Navbar />
    <div className="commitment-page" id="commitment">
        <div className="commitment-page-bg">
            <h1 className="commitment-page-main-heading" data-aos="fade-down" data-aos-duration="900">Our Core Values and Commitment to Sustainability</h1>
        </div>
        <div className="mission-page-content-container">
            <h1 className="commitment-page-heading">Our Core Values</h1>
            <div className="commitment-card-container">
                <div className="card-component" data-aos="zoom-in-down">
                    <h1 className="card-heading">Innovation</h1>
                    <p className="card-para">
                         We embrace innovation as the cornerstone of our company, constantly seeking new and creative ways to address challenges and drive progress
                    </p>
                </div>
                <div className="card-component" data-aos="zoom-in-down" data-aos-delay="300">
                    <h1 className="card-heading">Sustainability</h1>
                    <p className="card-para">
                        Sustainability is at the heart of everything we do. From product design to business models, we prioritize environmental responsibility and strive to minimize our ecological footprint
                    </p>
                </div>
                <div className="card-component" data-aos="zoom-in-down" data-aos-delay="500">
                    <h1 className="card-heading">Social Responsibility</h1>
                    <p className="card-para">
                        We are committed to being good stewards of the communities in which we operate, fostering positive relationships and contributing to social and economic development
                    </p>
                </div>
            </div>
            <h1 className="commitment-page-heading error-head1">Our Commitment to Sustainability</h1>
            <div className="commitment-card-container">
                <div className="commitment-card-component" data-aos="zoom-in-down">
                    <h1 className="card-heading">Creating Solutions for Tomorrow</h1>
                    <p className="card-para">
                        We are dedicated to creating solutions that not only meet the needs of today but also contribute to a greener and more sustainable tomorrow
                    </p>
                </div>
                <div className="commitment-card-component" data-aos="zoom-in-down" data-aos-delay="300">
                    <h1 className="card-heading">Ingrained Sustainability</h1>
                    <p className="card-para">
                        Sustainability is not just a goal for us; it's ingrained in every aspect of our operations. We continuously evaluate and improve our processes to minimize environmental impact and promote sustainability
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
);

export default CommitmentPage