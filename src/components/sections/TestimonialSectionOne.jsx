import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function TestimonialSectionOne() {
    return (
        <div className="testimonial-section">
            <div className="testimonal-inner">
                <div className="section-title">
                    <h6>Referanslar</h6>
                    <h2>Ne diyorlar</h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="testimonial-content-wrap owl-carousel"
                >
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>Alanında uzaman gayet ilgili bir avukat hanım gerçekten. Pek çok alanda kendisinden hukuki destek almakla birlikte dosyalarımı takip etmeye devam etmektedir.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Raziye BİLGİR</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>Ebru hanım işinde gerçekten başarılı her dosyanizi güvenle teslim edebilirsiniz. guvenle davanizdan sonuç alabilirsiniz.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Seher Uzunoğlu</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>Ebru hanım profesyonel ve ilgili bir avukat. Her şey için teşekkür ediyorum.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Ahmet Uçar</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>İletişimi güçlü ve çözüm odaklı yaklaşımıyla süreci sorunsuz yönetti. Tavsiye ederim.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Betül Karaca</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>Süreç boyunca her gelişmeyi anlık paylaştı ve hızlıca sonuç almamı sağladı.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Murat Demir</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-testimonial-item">
                        <div className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <div className="testimonial-text">
                            <p>Profesyonel ve titiz çalışması sayesinde güvenle ilerledik. Çok memnun kaldım.</p>
                        </div>
                        <div className="testimonial-title">
                            <h5>Elif Yıldız</h5>
                            <p>Müvekkil</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}
