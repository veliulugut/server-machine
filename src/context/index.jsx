import {createContext, useState, useContext, useEffect} from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

    const openSearch = () => setIsSearchActive(true);
    const closeSearch = () => setIsSearchActive(false);
    const openOffcanvas = () => setIsOffcanvasOpen(true);
    const closeOffcanvas = () => setIsOffcanvasOpen(false);
    const openMobileMenu = () => setIsMobileMenuShow(true);
    const closeMobileMenu = () => setIsMobileMenuShow(false);

    useEffect(() => {
        if (isSearchActive) {
            document.body.classList.add('search-active');
        } else {
            document.body.classList.remove('search-active');
        }
    }, [isSearchActive]);

    return (
        <AppContext.Provider value={{
            isSearchActive, openSearch, closeSearch,
            isOffcanvasOpen, openOffcanvas, closeOffcanvas,
            isMobileMenuShow, openMobileMenu, closeMobileMenu,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}