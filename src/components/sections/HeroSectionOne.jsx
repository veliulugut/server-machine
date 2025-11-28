import extraLine from "@/assets/img/extra_title_line.svg";
import heroImg from "@/assets/img/hero-img.jpg";
import heroWomanScales from "@/assets/img/hero-woman-scales.png";

export default function HeroSectionOne() {
    const heroSrc = heroWomanScales || import.meta.env.VITE_HERO_IMG_URL || heroImg;
    return (
        <div className="hero-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="section-title">
                            <h1 className="wow fadeInUp" data-wow-delay=".2s">Her Zaman Doğru Adalet İçin Duruyoruz</h1>
                            <div className="extra-title-line wow fadeInDown" data-wow-delay=".4s">
                                <img src={ extraLine } alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 wow fadeInUp" data-wow-delay=".6s">
                        <p>Müvekkilerimize en iyi hukuki hizmetleri sunarak, adaletin tecellisi için çalışıyoruz. 
                            Deneyimli ekibimizle her türlü hukuki sorununuzda yanınızdayız.</p>
                    </div>
                </div>
            </div>
            <div className="hero-img-wrap">
                <img src={ heroSrc } alt=""/>
            </div>
        </div>
    )
}
