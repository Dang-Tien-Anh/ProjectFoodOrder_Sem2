import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = ({ tableNumber }) => {
    return (
        <header>
            {/* Top red banner */}
            <div className="bg-danger text-white text-center py-2 fw-semibold">
                Order Online Now – No Delivery Fee
            </div>

            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg bg-white border-bottom px-3">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                        <i className="bi bi-fork-knife"></i>
                        <span className="fw-bold">ORDERING WEBSITE</span>
                    </a>

                    {/* Center links */}
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#menu">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right side buttons */}
                    <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-outline-secondary me-2">Reservations</button>
                        <button className="btn btn-danger me-3">Order Online</button>
                        <i className="bi bi-basket3"></i>
                        {/* Table number instead of login */}
                        <span className="fw-bold text-danger">Table {tableNumber}</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
