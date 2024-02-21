import React from "react";
import { Link } from "react-router-dom";
import './index.css'

const NotFound = () => (
    <div className="not-found-container">
        <img src="/images/20824298_6342464.jpg" alt="not-found" className="not-found-image" />
        <p className="not-found-para">Oops! It looks like this page is lost in space.</p>
        <Link className="link-element not-found-link-element" to="/">
            Go to Home Page
        </Link>
    </div>
)

export default NotFound