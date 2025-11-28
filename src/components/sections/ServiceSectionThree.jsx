import { Link } from 'react-router-dom';
import serviceImg from "@/assets/img/service-img.jpg";
import ClientSlider from "@/components/sections/ClientSlider";

export default function ServiceSectionThree() {
    return (
        <div id="service-3" className="service-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="service-img-wrap">
                            <img src={serviceImg} alt=""/>
                            <div className="service-desc">
                                <h3>We know exactly how to protect you</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="service-content-wrap">
                            <div className="section-title">
                                <h6>What We Do</h6>
                                <h2>We provide the best service for clients</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore.</p>
                            <div className="service-feature">
                                <h4><span>01.</span>Family Law</h4>
                                <h4><span>02.</span>Criminal Cases</h4>
                            </div>
                            <Link to="/services" className="theme-btn mt-30">Our Practice</Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-120">
                    <ClientSlider />
                </div>

                <div className="row mt-60">
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-agreement"></i>
                            </div>
                            <h5>Power of Attorney</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-certificate"></i>
                            </div>
                            <h5>Disputes & Criminal Cases</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-book"></i>
                            </div>
                            <h5>Labour Law</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-contract"></i>
                            </div>
                            <h5>Contract & Agreement</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-house"></i>
                            </div>
                            <h5>Insurance & Fruad Cases</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-mortarboard"></i>
                            </div>
                            <h5>Legal Advice</h5>
                            <p>Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. </p>
                            <Link to="/services/single-service" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}