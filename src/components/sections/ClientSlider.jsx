import 'swiper/css';
import 'swiper/css/pagination';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import clientImg1 from "@/assets/img/client/1.jpg";
import clientImg2 from "@/assets/img/client/2.jpg";
import clientImg3 from "@/assets/img/client/3.jpg";
import clientImg4 from "@/assets/img/client/4.jpg";
import clientImg5 from "@/assets/img/client/5.jpg";
import clientImg6 from "@/assets/img/client/6.jpg";

export default function ClientSlider() {
    const clients = [
        clientImg1,
        clientImg2,
        clientImg3,
        clientImg4,
        clientImg5,
        clientImg6
    ];

    return (
        <div className="row mt-60">
            <Swiper
                loop={true}
                spaceBetween={30}
                slidesPerView={5}
                autoplay={{ delay: 3000 }}
                speed={500}
                grabCursor={true}
                pagination={false}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        pagination: false,
                    },
                    600: {
                        slidesPerView: 2,
                        pagination: false,
                    },
                    768: {
                        slidesPerView: 3,
                        pagination: false,
                    },
                    1100: {
                        slidesPerView: 5,
                        pagination: { clickable: true },
                    },
                }}
                className="client-wrap"
            >
                {clients.map((item, index) => (
                    <SwiperSlide className="clients-img-inner" key={index}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}