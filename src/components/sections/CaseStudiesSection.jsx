import { Link } from 'react-router-dom';
import caseImg51 from "@/assets/img/case/5-1.jpg";
import caseImg52 from "@/assets/img/case/5-2.jpg";
import caseImg53 from "@/assets/img/case/5-3.jpg";
import caseImg54 from "@/assets/img/case/5-4.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CaseStudiesSection() {
    return (
        <div className="case-section section-padding">
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
                    <div className="col-xl-12">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            autoplay={{delay: 3000}}
                            navigation={{
                                nextEl: '.owl-next',
                                prevEl: '.owl-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            loop={false}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    navigation: false,
                                    pagination: false,
                                },
                                575: {
                                    slidesPerView: 1,
                                    navigation: false,
                                    pagination: false,
                                },
                                767: {
                                    slidesPerView: 2,
                                    navigation: true,
                                    pagination: false,
                                },
                                990: {
                                    slidesPerView: 2,
                                    pagination: true,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    pagination: true,
                                },
                            }}
                            className="case-slider owl-carousel"
                        >
                            <SwiperSlide>
                                <Link to="/case/details" className="single-case-wrapper">
                                    <div className="case-bg">
                                        <img src={caseImg51} alt=""/>
                                    </div>
                                    <div className="case-details">
                                        <h5>Complicated Cases</h5>
                                        <span>Criminal</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/case/details" className="single-case-wrapper">
                                    <div className="case-bg">
                                        <img src={caseImg52} alt=""/>
                                    </div>
                                    <div className="case-details">
                                        <h5>Fruad Scheme</h5>
                                        <span>Finance</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/case/details" className="single-case-wrapper">
                                    <div className="case-bg">
                                        <img src={caseImg53} alt=""/>
                                    </div>
                                    <div className="case-details">
                                        <h5>Abuse Victim</h5>
                                        <span>Family Law</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/case/details" className="single-case-wrapper">
                                    <div className="case-bg">
                                        <img src={caseImg54} alt=""/>
                                    </div>
                                    <div className="case-details">
                                        <h5>Real Estate Fruad</h5>
                                        <span>Corporate</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <div className="owl-nav position-sticky">
                                <button type="button" role="presentation" className="owl-prev">
                                    <i className="las la-arrow-left"></i>
                                </button>
                                <button type="button" role="presentation" className="owl-next">
                                    <i className="las la-arrow-right"></i>
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}