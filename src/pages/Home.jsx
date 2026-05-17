// src/pages/Home.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/banner.webp";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Home = () => {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            {/* Slideshow section with red background */}
            <section
                style={{
                    backgroundColor: "red",
                    width: "100%",
                    height: "482px",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Carousel fade controls indicators interval={2000} className="w-100">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="Asian Food Deal"
                            style={{ height: "482px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h2 className="fw-bold">The Real Deal on Asian Food</h2>
                            <p>The Noodle Way serves authentic Asian food</p>
                            <button className="btn btn-light">Menu</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Special Offer"
                            style={{ height: "482px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h2 className="fw-bold">Today’s Special</h2>
                            <p>Enjoy 20% off ramen bowls</p>
                            <button className="btn btn-light">Order Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Great Deals"
                            style={{ height: "482px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h2 className="fw-bold">Great Deals Await</h2>
                            <p>Fresh, fast, and flavorful</p>
                            <button className="btn btn-light">See Deals</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Split section: Order Online + Reserve a Table */}
            <section
                style={{
                    display: "flex",
                    width: "100%",
                    height: "482px",
                    margin: 0,
                    padding: 0
                }}
            >
                {/* Left side - Order Online */}
                <div
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem"
                    }}
                >
                    <i className="bi bi-bicycle fs-1 text-danger"></i>
                    <h2 className="mt-3">Order Online</h2>
                    <p>Our Noodles Are Coming Your Way</p>
                    <button className="btn btn-danger">Order Now</button>
                </div>

                {/* Right side - Reserve a Table */}
                <div
                    style={{
                        flex: 1,
                        backgroundColor: "red",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem"
                    }}
                >
                    <h2 className="fw-bold">Reserve a Table</h2>
                    <p>
                        To help us find the best table for you, select the preferred party
                        size, date, and time of your reservation.
                    </p>

                    <form style={{ maxWidth: "300px", width: "100%" }}>
                        <div className="mb-3">
                            <label className="form-label">Party Size</label>
                            <select className="form-select">
                                <option>2 guests</option>
                                <option>4 guests</option>
                                <option>6 guests</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Time</label>
                            <input type="time" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-light text-danger fw-bold">
                            Find a Table
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
