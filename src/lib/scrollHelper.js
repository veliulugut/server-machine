export const handleScrollSticky = (setIsSticky, threshold = 400) => {
    return () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsSticky(scrollTop >= threshold);
    };
};
