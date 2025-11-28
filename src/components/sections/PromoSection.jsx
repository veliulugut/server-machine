import BarFillerItem from "@/components/BarFiller";

export default function PromoSection() {
    return (
        <div className="promo-section gray-bg section-padding">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="client-content-wrap">
                            <div className="section-title">
                                <h6>Özel Talep</h6>
                                <h2>Bir dosyanız mı var? <br/> Kısa bir özet gönderin!</h2>
                            </div>
                            <p>İhtiyacınızı kısaca iletin; uygun hizmeti, süre ve maliyet bilgisini hızlıca paylaşalım.
                                Tüm süreçlerde şeffaf ve erişilebilir iletişim sağlıyoruz.</p>
                            <div className="contact-info-wrap">
                                <div className="contact-icon">
                                    <i className="las la-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <p>ebru.culhaa@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="progress-bar-area">
                            <BarFillerItem title="Hukuki Danışmanlık" percentage={90} />
                            <BarFillerItem title="Dava Uyuşmazlıkları" percentage={70} />
                            <BarFillerItem title="Noter Hizmetleri" percentage={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
