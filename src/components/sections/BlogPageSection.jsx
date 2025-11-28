import { Link } from 'react-router-dom';
import blogImg1 from "@/assets/img/blog/1.jpg";
import blogImg2 from "@/assets/img/blog/2.jpg";
import blogImg3 from "@/assets/img/blog/3.jpg";
import blogImg4 from "@/assets/img/blog/4.jpg";
// removed: blogImg5
import blogImg5 from "@/assets/img/blog/5.jpg";
import blogImg6 from "@/assets/img/blog/6.jpg";
// import blogImg7 from "@/assets/img/blog/7.jpg";
// removed: blogImg8, blogImg9, blogKey

export default function BlogPageSection() {
    return (
        <div className="blog-section gray-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
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
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to="/yazilar/hukuki-hizmet-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".4s">
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
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to="/yazilar/ceza-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".6s">
                            <div className="blog-img">
                                <img src={blogImg3} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>Ceza Hukuku</span>
                                </div>
                                <div className="blog-title">
                                    <h4>Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi</h4>
                                </div>
                                <div className="blog-info">
                                    <span>28 Şubat 2024</span>
                                    <span>1 yorum</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to="/yazilar/ceza-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".8s">
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
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to="/yazilar/aile-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".8s">
                            <div className="blog-img">
                                <img src={blogImg5} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>Trafik Hukuku</span>
                                </div>
                                <div className="blog-title">
                                    <h4>Trafik Kazası Tazminatları Nelerdir?</h4>
                                </div>
                                <div className="blog-info">
                                    <span>02 Kasım 2023</span>
                                    <span>1 yorum</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to="/yazilar/ticaret-hukuku-blog-1" className="single-blog-item wow fadeInUp" data-wow-delay=".8s">
                            <div className="blog-img">
                                <img src={blogImg6} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>Aile Hukuku</span>
                                </div>
                                <div className="blog-title">
                                    <h4>Ailenizi ve işinizi korumanın en iyi yolları</h4>
                                </div>
                                <div className="blog-info">
                                    <span>02 Kasım 2023</span>
                                    <span>1 yorum</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    
                    
                </div>
                <div className="row">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item active"><Link className="page-link" to="/yazilar">1</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
