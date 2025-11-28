import { useLocation } from "react-router-dom";
import HeaderOne from "@/components/header/HeaderOne.jsx";
import HeaderTwo from "@/components/header/HeaderTwo.jsx";
import HeaderThree from "@/components/header/HeaderThree.jsx";

export default function Header() {
    const {pathname} = useLocation();

    if (pathname === '/home-2') {
        return <HeaderTwo />;
    }

    if (pathname === '/' || pathname === '/contact' || pathname.startsWith('/services') || pathname.startsWith('/yazilar')) {
        return <HeaderOne />;
    }

    // Default to HeaderOne for all other pages including home one
    return <HeaderThree />;
}
