import { Link } from 'react-router-dom';
import caseImg51 from "@/assets/img/case/5-1.jpg";
import caseImg53 from "@/assets/img/case/5-3.jpg";
import caseImg52 from "@/assets/img/case/5-2.jpg";
import caseImg54 from "@/assets/img/case/5-4.jpg";
import caseImg55 from "@/assets/img/case/5-5.jpg";
import caseImg56 from "@/assets/img/case/5-6.jpg";

export default function CaseStudiesSectionTwo() {
    return (
        <div className="case-section section-padding pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="section-title">
                            <h6>Case Studies</h6>
                            <h2>Our job is to provide legal help</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg51} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Complicated Cases</h5>
                                <span>Criminal</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg53} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Abuse Victim</h5>
                                <span>Family Law</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg52} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Fruad Scheme</h5>
                                <span>Finance</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg54} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Fruad Scheme</h5>
                                <span>Finance</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg55} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Fruad Scheme</h5>
                                <span>Finance</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <Link to="/case/details" className="single-case-wrapper">
                            <div className="case-bg">
                                <img src={caseImg56} alt=""/>
                            </div>
                            <div className="case-details">
                                <h5>Fruad Scheme</h5>
                                <span>Finance</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}