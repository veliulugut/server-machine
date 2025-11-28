import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navType = useNavigationType();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        const targetId = hash && hash.startsWith('#') ? hash.slice(1) : '';
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            if (targetId) {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        if (navType === 'PUSH') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, hash, navType]);

    return null;
};

export default ScrollToTop;
