import { Link } from 'react-router-dom';
import {menuData} from "@/data/menus";
import { useLocation } from "react-router-dom";

export default function MainMenu() {
    const {pathname} = useLocation();

    const onHashClick = (e, href) => {
        if (!href || !href.startsWith('/#')) return;
        const id = href.split('#')[1];
        if (!id) return;
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
        <div className="main-menu d-none d-lg-block">
            <ul>
                {menuData.map((item, idx) => {
                    const isActive = item.href === pathname ||
                        item.subMenu?.some(sub => sub.href === pathname);

                    return (
                        <li key={idx} className={isActive ? 'active' : ''}>
                            {item.href ? (
                                <Link to={item.href} className="navlink" onClick={(e) => onHashClick(e, item.href)}>{item.label}</Link>
                            ) : (
                                <span className="navlink">{item.label}</span>
                            )}

                            {item.subMenu && (
                                <ul className="sub-menu">
                                    {item.subMenu.map((sub, subIdx) => (
                                        <li key={subIdx}>
                                            <Link
                                                to={sub.href}
                                                className={sub.href === pathname ? 'active' : ''}
                                            >
                                                {sub.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
