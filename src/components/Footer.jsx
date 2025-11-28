import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const { pathname } = useLocation();
    const onFaqClick = (e) => {
        const id = 'faq';
        if (pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', `/#${id}`);
            }
        }
    };
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-up">
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="logo">
                                    <Link className="navbar-brand" to="/">
                                        <div className="logo-text">
                                            <span className="name">Ebru Çulha</span>
                                            <span className="title">Hukuk Bürosu</span>
                                        </div>
                                    </Link>
                                </div>
                                <p>Üstün performans sunmak için <br /> en iyi hukuki hizmetleri sağlıyoruz.
                                </p>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                                <h5>Bağlantılar</h5>
                                <ul>
                                    <li>
                                        <Link to="/#faq" onClick={onFaqClick}>Sıkça Sorulan Sorular</Link>
                                        <Link to="/contact">İletişim</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <h5>Ofis</h5>
                                <ul>
                                    <li>
                                        <p>Başak, Yeşilvadi Cd. Referans Başakşehir Vadi Sitesi<br/>
                                           D:8AU 1(B) No:67, 34480 Başakşehir/İstanbul
                                        </p>
                                        <div className="company-email">
                                            <a href="mailto:ebru.culhaa@gmail.com">ebru.culhaa@gmail.com</a>
                                        </div>
                                        <div className="phone-number">
                                            <p><a href="tel:+905446815433">+90 544 681 54 33</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            {/*-- Footer Bottom Area --*/}

            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-center align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="copyright-line">© 2025 LodzyTech. Tüm hakları saklıdır.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 text-md-end">
                            <p className="privacy">Gizlilik Politikası | Şartlar ve Koşullar</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
