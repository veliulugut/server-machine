import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import WOW from 'wow.js';
import { AppWrapper } from "@/context";
import PreLoader from "@/components/PreLoader.jsx";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/Footer.jsx";
import SearchDropdown from "@/components/SearchDropdown.jsx";
import BackToTop from "@/components/BackToTop.jsx";
// favicon uses the existing /favicon.ico

function App() {
    useEffect(() => {
        new WOW().init();
        const link = document.querySelector('link[rel="icon"]') || document.createElement('link')
        link.rel = 'icon'
        link.type = 'image/x-icon'
        link.href = '/favicon.ico'
        if (!link.parentNode) document.head.appendChild(link)
        document.title = 'Ebru Çulha Hukuk Bürosu'
    }, []);

    return (
        <>
            {/*-- Pre-Loader --*/}
            <PreLoader />



            <AppWrapper>
                {/*-- Header Area  --*/}
                <Header />

                <Outlet />

                {/*-- Footer Area --*/}
                <Footer />
                {/*-- Search Dropdown --*/}
                <SearchDropdown />
            </AppWrapper>

            {/*-- back to top start --*/}
            <BackToTop />
        </>
    )
}

export default App
