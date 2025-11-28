import { Link, useLocation } from 'react-router-dom';

export default function HeaderRight() {
    const { pathname } = useLocation();

    return(
        <div className="header-right">

            {/* Search kaldırıldı */}
            <div className="contact-number d-none d-xl-flex">
                <div className="icon"><i className="las la-phone-volume"></i></div>
                <div className="title"><h4>+90 544 681 54 33</h4></div>
            </div>
            {/*-- Header Button --*/}
            {pathname === '/contact' ? (
                <a href="tel:+905446815433" className="theme-btn d-none d-lg-inline-block">İletişime Geç</a>
            ) : (
                <Link to="/contact" className="theme-btn d-none d-lg-inline-block">İletişime Geç</Link>
            )}

        </div>
    )
}
