import { Link } from 'react-router-dom';

export default function BlogSectionTwo() {
    return (
        <div id="blog-2" className="blog-section gray-bg section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 text-center">
                        <div className="section-title">
                            <h6>Güncel Haberler</h6>
                            <h2>Hukuk büromuzun blogu</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-blog-item">
                            <div className="blog-meta">
                                <span className="text-black"><b>Medeni Hukuk</b></span>
                                <span className="date">07 Şubat 2024</span>
                            </div>
                            <div className="blog-title">
                                <h5 className="text-black">Ailenizi ve işinizi korumanın en iyi yolları</h5>
                            </div>
                            <p>Sed libero tortor, pellentesque nec diam ac, facilisis rutrum nunc. Duis sed efficitur
                                dolor</p>
                            <Link to="/yazilar/medeni-hukuk-blog-1" className="read_more_link">
                                <span className="link_text">Devamını Oku</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-blog-item">
                            <div className="blog-meta">
                                <span className="text-black"><b>Ceza Hukuku</b></span>
                                <span className="date">10 Şubat 2024</span>
                            </div>
                            <div className="blog-title">
                                <h5 className="text-black">Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi</h5>
                            </div>
                            <p>Sed libero tortor, pellentesque nec diam ac, facilisis rutrum nunc. Duis sed efficitur
                                dolor</p>
                            <Link to="/yazilar/ceza-hukuku-blog-1" className="read_more_link">
                                <span className="link_text">Devamını Oku</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-blog-item">
                            <div className="blog-meta">
                                <span className="text-black"><b>İş Hukuku</b></span>
                                <span className="date">15 Şubat 2024</span>
                            </div>
                            <div className="blog-title">
                                <h5 className="text-black">Cumhurbaşkanına Hakaret Suçu Nedir? (TCK 299)</h5>
                            </div>
                            <p>Sed libero tortor, pellentesque nec diam ac, facilisis rutrum nunc. Duis sed efficitur
                                dolor</p>
                            <Link to="/yazilar/hukuki-hizmet-blog-1" className="read_more_link">
                                <span className="link_text">Devamını Oku</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
