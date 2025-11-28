import { Link } from 'react-router-dom';
import logo from "@/assets/img/newlogo.png";
import MainMenu from "@/components/header/MainMenu";
import MobileMenu from "@/components/header/MobileMenu";
import HeaderRight from "@/components/HeaderRight";
import { handleScrollSticky } from "@/lib/scrollHelper";
import { useEffect, useState } from "react";

export default function HeaderOne() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const onScroll = handleScrollSticky(setIsSticky);

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={`header-area ${isSticky ? "header-sticky" : ""}`}>
            <div id="header-sticky">
                <div className="navigation">
                    <div className="container-fluid">
                        <div className="header-inner-box">

                            <div className="logo">
                                <Link className="navbar-brand" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <img src={logo} alt="" />
                                    <div className="logo-text">
                                        <span className="name">Ebru Çulha</span>
                                        <span className="title">Hukuk Bürosu</span>
                                    </div>
                                </Link>
                            </div>

                            {/*-- Main Menu  --*/}
                            <MainMenu />

                            <HeaderRight />

                            {/*-- Mobile Menu --*/}
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}