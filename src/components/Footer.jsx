import React from "react";

const Footer = () => {
    return (
        <footer className="bg-danger text-white pt-5 pb-3 m-0">
            <div className="container">
                <div className="row">
                    {/* Contact Us */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>📞 123-456-7890</p>
                        <p>✉️ info@mysite.com</p>
                    </div>

                    {/* Address */}
                    <div className="col-md-4 mb-3">
                        <h5>Address</h5>
                        <p>500 Terry Francine Street</p>
                        <p>San Francisco, CA 94158</p>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-md-4 mb-3">
                        <h5>Opening Hours</h5>
                        <p>Mon - Fri: 8am - 8pm</p>
                        <p>Saturday: 9am - 7pm</p>
                        <p>Sunday: 9am - 8pm</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <small>©2035 by The Noodle Way. Powered and secured by Wix</small>
                    </div>
                    <div className="col-md-6 text-end">
                        <i className="bi bi-yelp me-3"></i>
                        <i className="bi bi-facebook me-3"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
