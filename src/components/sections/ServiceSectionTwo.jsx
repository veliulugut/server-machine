import { Link } from 'react-router-dom';

export default function ServiceSectionTwo() {
    return (
        <div id="service-2" className="service-section section-padding pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="service-content-wrap">
                            <div className="section-title">
                                <h6>Legal Services</h6>
                                <h2>Resolve your legal issues with our help</h2>
                            </div>
                            <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut
                                fugit, sed quia.</p>
                            <div className="about-btn mt-40">
                                <Link to="/services" className="theme-btn">Our Practice</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="service-item-wrap">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 mt-30 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="single-service-item">
                                        <div className="service-icon">
                                            <span><i className="flaticon-international-business"></i></span>
                                        </div>
                                        <div className="service-title">
                                            <h4>Business Law</h4>
                                        </div>
                                        <p>Vestibulum vestibulum posuere luctus pretium.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="single-service-item">
                                        <div className="service-icon">
                                            <span><i className="flaticon-family"></i></span>
                                        </div>
                                        <div className="service-title">
                                            <h4>Family Law</h4>
                                        </div>
                                        <p>Vestibulum vestibulum posuere luctus pretium.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="single-service-item">
                                        <div className="service-icon">
                                            <span><i className="flaticon-balance"></i></span>
                                        </div>
                                        <div className="service-title">
                                            <h4>Criminal Law</h4>
                                        </div>
                                        <p>Vestibulum vestibulum posuere luctus pretium.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 mtm-30 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="single-service-item">
                                        <div className="service-icon">
                                            <span><i className="flaticon-contract"></i></span>
                                        </div>
                                        <div className="service-title">
                                            <h4>Personal Injury</h4>
                                        </div>
                                        <p>Vestibulum vestibulum posuere luctus pretium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}