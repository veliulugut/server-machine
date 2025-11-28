import {useEffect, useRef} from "react";
import MetisMenu from "metismenujs";
import 'metismenujs/sass';
import {useAppContext} from "@/context";
import { Link } from 'react-router-dom';
import {menuData} from "@/data/menus";

export default function MobileMenu() {
    const {openMobileMenu, isMobileMenuShow, closeMobileMenu} = useAppContext();
    const menuRef = useRef(null);
    const metisMenuInstance = useRef(null);

    useEffect(() => {
        // Initialize MetisMenu when component mounts
        if (menuRef.current) {
            metisMenuInstance.current = new MetisMenu(menuRef.current);
        }

        return () => {
            // Cleanup: destroy MetisMenu instance on unmount to avoid memory leaks
            if (metisMenuInstance.current) {
                metisMenuInstance.current.dispose();
            }
        };
    }, []);

    const onHashClick = (e, href) => {
        if (!href || !href.startsWith('/#')) return;
        const id = href.split('#')[1];
        if (!id) return;
        // On home page, scroll immediately and keep hash
        if (window.location.pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', `/#${id}`);
                closeMobileMenu();
            }
        }
    };

    return (
        <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
            <div className="mobile-nav-wrap">
                <div id="hamburger">
                    <i className="las la-bars" onClick={openMobileMenu}></i>
                </div>
                {/*-- mobile menu - responsive menu  --*/}
                <div className={`mobile-nav ${isMobileMenuShow ? 'show': ''}`}>
                    <button type="button" className="close-nav" onClick={closeMobileMenu}>
                        <i className="las la-times-circle"></i>
                    </button>
                    <nav className="sidebar-nav">
                        <ul className="metismenu" id="mobile-menu" ref={menuRef}>
                            {menuData.map((menuItem, idx) => (
                                <li key={idx}>
                                    <Link className={menuItem.subMenu ? 'has-arrow' : ''} to={menuItem.href || '#'} onClick={(e) => onHashClick(e, menuItem.href)}>
                                        {menuItem.label}
                                    </Link>
                                    {menuItem.subMenu && (
                                        <ul className="sub-menu">
                                            {menuItem.subMenu.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link
                                                        to={subItem.href}
                                                        className={subItem.active ? 'active' : ''}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="action-bar">
                        <a href="mailto:ebru.culhaa@gmail.com"><i className="las la-envelope"></i>ebru.culhaa@gmail.com</a>
                        <a href="tel:+905446815433"><i className="las la-phone-volume"></i>+90 544 681 54 33</a>
                        <Link to="/contact" className="theme-btn">İletişime Geç</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
