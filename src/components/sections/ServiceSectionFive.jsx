import { Link } from 'react-router-dom';
import serviceImg from "@/assets/img/service-img.jpg";

export default function ServiceSectionFive() {
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

            </div>
        </div>
    )
}