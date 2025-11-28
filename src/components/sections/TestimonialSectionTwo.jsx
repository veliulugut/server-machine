import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import author2Img from "@/assets/img/testimonial/author-2.jpg";
import author3Img from "@/assets/img/testimonial/author-3.jpg";

export default function TestimonialSectionTwo() {
    return (
        <div id="testimonial-2" className="testimonial-section theme-bg section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 text-center">
                        <div className="section-title">
                            <h6 className="text-white">Referanslar</h6>
                            <h2 className="text-white">Müvekkil güven ve sadakatini kazanıyoruz</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-30">
                    <div className="col-xl-7 col-lg-7 text-center">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            navigation={{
                                nextEl: '.owl-next',
                                prevEl: '.owl-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            loop={true}
                            className="testimonial-wrapper owl-carousel"
                        >
                            <SwiperSlide className="single-testimonial-item">

                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={author2Img} alt=""/>
                                    <h6 className="text-white">Paul Scholes <span>Manchester, UK</span></h6>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className="single-testimonial-item">
                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={author3Img} alt=""/>
                                    <h6 className="text-white">Lisa Ray <span>New York, USA</span></h6>
                                </div>

                            </SwiperSlide>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev position-relative top-0">
                                    <i className="las la-arrow-left"></i>
                                </button>
                                <button type="button" role="presentation" className="owl-next position-relative top-0">
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
