export default function BannerSection({ slug }) {
    const isMedeni = slug === 'medeni-hukuk-blog-1';
    const isAile = slug === 'aile-hukuku-blog-1';
    const isCeza = slug === 'ceza-hukuku-blog-1';
    const isHizmet = slug === 'hukuki-hizmet-blog-1';
    const category = isMedeni ? 'Medeni Hukuk' : isAile ? 'Trafik' : (isCeza || isHizmet) ? 'Ceza Hukuku' : 'İnşaat';
    const headline = isMedeni ? 'KUSURSUZ SORUMLULUK NEDİR?' : isAile ? 'Trafik Kazası Tazminatları Nelerdir?' : isCeza ? 'Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi' : isHizmet ? 'CUMHURBAŞKANINA HAKARET SUÇU (TCK M.299)' : 'Hukuk Eğitimi için bir fırsat';
    const showCommentsMeta = !(isMedeni || isAile || isCeza || isHizmet);
    return (
        <div className="banner-section blog-dtl-bg section-padding pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="section-title">
                            <span className="text-white">{category}</span>
                            <h2 className="text-white">{headline}</h2>
                        </div>
                        <div className="blog-meta-wrap">
                            <div className="blog-meta">
                                <p><i className="las la-calendar-alt"></i>05 Aralık 2023</p>
                            </div>
                            {showCommentsMeta && (
                                <div className="blog-meta">
                                    <p><i className="las la-comments"></i>02 Yorum</p>
                                </div>
                            )}
                            <div className="blog-meta">
                                <p><i className="las la-user-alt"></i>Yazar: Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
