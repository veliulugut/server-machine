import { Link } from 'react-router-dom';
import aboutImg2 from "../../../hakkinda2.png";

export default function AboutSectionOne() {
    return (
        <div id="about-1" className="about-section gray-bg section-padding pb-150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img-wrap">
                            <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                                <img src={aboutImg2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>Hakkımızda</h6>
                                <h2>Hukuki güvenliğiniz <br/> bizim önceliğimiz</h2>
                            </div>
                            <p>Müvekkillerimizin hukuki haklarını korumak ve adaletin tecellisi için çalışan 
                                deneyimli bir hukuk bürosuyuz. Güvenilir hizmet anlayışımızla yanınızdayız.</p>
                            <ul className="about-key mt-30">
                                <li><i className="las la-check-square"></i>
                                    <p>En İyi Hukuki Hizmetler</p>
                                </li>
                                <li><i className="las la-check-square"></i>
                                    <p>%100 Başarı Oranı</p>
                                </li>
                                <li><i className="las la-check-square"></i>
                                    <p>Uzman Avukat</p>
                                </li>
                                <li><i className="las la-check-square"></i>
                                    <p>Uygun Maliyet Oranı</p>
                                </li>
                            </ul>
                            <Link to="/contact" className="theme-btn mt-30">İletişim</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
