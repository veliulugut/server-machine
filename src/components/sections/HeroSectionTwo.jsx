import { Link } from 'react-router-dom';
import heroImgBg from "@/assets/img/hero-area-bg.jpg";

export default function HeroSectionTwo() {
    return (
        <div className="hero-area">
            <div className="container-fluid">
                <div className="hero-bg-area pt-150 pb-120" style={{ backgroundImage: `url(${heroImgBg})`}}>
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="hero-content-area">
                                <div className="section-title">
                                    <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">Kişisel Haklarınızı
                                        Koruyoruz</h1>
                                </div>
                                <p className="text-white wow fadeInDown" data-wow-delay=".4s">Adipiscing elit, sed do
                                    eiusmod tempor incididunt labore dolore magna aliqua. <br/> Ut enim ad minim veniam
                                    natus error sit voluptatem acc.</p>
                                <Link to="/contact" className="theme-btn mt-30 wow fadeInUp" data-wow-delay=".6s">
                                    İletişim
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
