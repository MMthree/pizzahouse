import React from 'react';
import { Link } from "react-router-dom";

const AppFooter = () => {
    return (
        <div className="app-footer col-12">
            <div className="footer-links">
                <Link to="#"><p>Privacy Policy</p></Link>
                <Link to="#"><p>Terms Of Use</p></Link>
                <Link to="#"><p>Tracking Tags</p></Link>
            </div>
            <div className="social-links">
                <div className="footer-icons">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="footer-icons">
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="footer-icons">
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;
