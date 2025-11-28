import avatar1 from "@/assets/img/avatar1.jpg";

export default function AboutSectionThree() {
    return (
        <div id="about-3" className="about-section gray-bg section-padding pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>Misyonumuz</h6>
                                <h2>Hukuki danışmanlık uzmanlık alanımız</h2>
                            </div>
                            <p>Müvekkillerimizin haklarını etkin biçimde korumak, uyuşmazlıkları hızlı ve
                                kalıcı çözümlerle sonlandırmak için çalışıyoruz. Güven, şeffaflık ve profesyonellik
                                temel ilkelerimizdir.</p>
                            <div className="ceo-wrapper">
                                <div className="ceo-thumb">
                                    <img src={avatar1} alt=""/>
                                </div>
                                <div className="ceo-info">
                                    <h5>Ebru Çulha</h5>
                                    <span>Kurucu Avukat</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-desc-wrap">
                            <div className="row gx-5">
                                <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                    <p><span className="dropcap_style">H</span>ukuki süreçlerde müvekkillerimizi her
                                        aşamada bilgilendirir, delil ve strateji planlamasını titizlikle yürütürüz.</p>
                                    <p>Uzman ekibimizle dava ve danışmanlık hizmetlerinde hızlı, etkili ve
                                        sonuç odaklı yaklaşım benimsiyoruz.</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                    <p>Her dosyayı özgün olarak ele alır, hedef odaklı yol haritası ile ilerleriz.</p>
                                    <p>Şeffaf iletişim ve erişilebilirlik sayesinde güven ilişkisini güçlendiririz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
