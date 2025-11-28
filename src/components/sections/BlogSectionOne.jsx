import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';
import blogImg1 from "@/assets/img/blog/1.jpg";
import blogImg2 from "@/assets/img/blog/2.jpg";
import blogImg3 from "@/assets/img/blog/3.jpg";
import blogImg4 from "@/assets/img/blog/4.jpg";

export default function BlogSectionOne() {
    return (
        <div className="blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 text-center">
                        <div className="section-title">
                            <h6>Blogumuzdan</h6>
                            <h2>En güncel haberler</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-30">
                    <Swiper
                        modules={[Pagination]}
                        loop={true}
                        autoplay={false}
                        spaceBetween={40} // Equivalent to margin: 40
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                pagination: { clickable: true },
                            },
                            575: {
                                slidesPerView: 2,
                                pagination: { clickable: true },
                            },
                            767: {
                                slidesPerView: 2,
                                pagination: { clickable: true },
                            },
                            990: {
                                slidesPerView: 3,
                                pagination: { clickable: true },
                            },
                            1200: {
                                slidesPerView: 3,
                                pagination: { clickable: true },
                            },
                        }}
                        className="blog-carousel owl-carousel"
                    >
                        <SwiperSlide>
                            <Link to="/yazilar/medeni-hukuk-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="blog-img">
                                    <img src={blogImg1} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span>Medeni Hukuk</span>
                                    </div>
                                    <div className="blog-title">
                                        <h4>Kusursuz Sorumluluk Nedir?</h4>
                                    </div>
                                    <div className="blog-info">
                                        <span>05 Şubat 2024</span>
                                        <span>1 yorum</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/yazilar/ceza-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="blog-img">
                                    <img src={blogImg2} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span>Ceza Hukuku</span>
                                    </div>
                                    <div className="blog-title">
                                        <h4>Cumhurbaşkanına Hakaret Suçu Nedir? (TCK 299)</h4>
                                    </div>
                                    <div className="blog-info">
                                        <span>15 Şubat 2024</span>
                                        <span>1 yorum</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/yazilar/ceza-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="blog-img">
                                    <img src={blogImg3} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span>Ceza Hukuku</span>
                                    </div>
                                    <div className="blog-title">
                                        <h4>Avukatlar ve ceza savunma üzerine 10 mit</h4>
                                    </div>
                                    <div className="blog-info">
                                        <span>28 Şubat 2024</span>
                                        <span>1 yorum</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/yazilar/hukuki-hizmet-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="blog-img">
                                    <img src={blogImg4} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span>Hukuki Hizmet</span>
                                    </div>
                                    <div className="blog-title">
                                        <h4>Mahkeme alanında hukuki hizmetlerin iyileştirilmesi</h4>
                                    </div>
                                    <div className="blog-info">
                                        <span>02 Kasım 2023</span>
                                        <span>1 yorum</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
