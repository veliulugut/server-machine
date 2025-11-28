import { Link } from 'react-router-dom';

export default function ServiceSectionSix() {
    return (
        <div id="service-3" className="service-section section-padding">
            <div className="container">
                <div className="row">
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