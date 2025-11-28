export default function NewsletterSection() {
    return (
        <div className="newsletter-section gray-bg section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="section-title mb-0">
                            <h6>Bültene Kayıt</h6>
                            <h2>Özel duyurular için abone olun</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 text-md-end">
                        <div className="subscribed-form">
                            <input type="text" placeholder="E-posta adresinizi girin"/>
                            <div className="submit-btn"><i className="las la-paper-plane"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
