import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ServiceSectionOne() {
    return (
        <div id="service-1" className="service-section section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6>Hukuki Çözümler</h6>
                            <h2>Sunuyoruz</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <p>Ceza hukuku, boşanma‑aile hukuku, iş hukuku, kira hukuku ve icra hukuku alanlarında 
                            öncelikli olarak çalışıyoruz. Bununla birlikte çoğu hukuk dalında nitelikli hizmet veriyoruz.</p>
                        <p>Haklarınızı korumak ve etkin çözümler üretmek için deneyimli ekibimizle yanınızdayız.</p>
                    </div>
                </div>
                <div className="mt-60">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 4000 }}
                        loop
                        spaceBetween={30}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        <SwiperSlide>
                            <div className="single-service-item">
                                <div className="service-icon">
                                    <span><i className="flaticon-international-business"></i></span>
                                </div>
                                <div className="service-title">
                                    <h4>Ceza Hukuku <br/> Savunması</h4>
                                </div>
                                <Link to="/services/ceza-hukuku" className="read_more_link">
                                    <span className="link_text">Devamını Oku</span>
                                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-service-item">
                                <div className="service-icon">
                                    <span><i className="flaticon-family"></i></span>
                                </div>
                                <div className="service-title">
                                    <h4>Boşanma‑Aile <br/> Hukuku</h4>
                                </div>
                                <Link to="/services/aile-hukuku" className="read_more_link">
                                    <span className="link_text">Devamını Oku</span>
                                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-service-item">
                                <div className="service-icon">
                                    <span><i className="flaticon-balance"></i></span>
                                </div>
                                <div className="service-title">
                                    <h4>İş Hukuku <br/> Hizmeti</h4>
                                </div>
                                <Link to="/services/is-hukuku" className="read_more_link">
                                    <span className="link_text">Devamını Oku</span>
                                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-service-item">
                                <div className="service-icon">
                                    <span><i className="flaticon-contract"></i></span>
                                </div>
                                <div className="service-title">
                                    <h4>Kira Hukuku <br/> Hizmeti</h4>
                                </div>
                                <Link to="/services/kira-hukuku" className="read_more_link">
                                    <span className="link_text">Devamını Oku</span>
                                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-service-item">
                                <div className="service-icon">
                                    <span><i className="flaticon-balance"></i></span>
                                </div>
                                <div className="service-title">
                                    <h4>İcra Hukuku <br/> Hizmeti</h4>
                                </div>
                                <Link to="/services/icra-hukuku" className="read_more_link">
                                    <span className="link_text">Devamını Oku</span>
                                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
