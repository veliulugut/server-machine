import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
    const pathRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const path = pathRef.current;
        const pathLength = path.getTotalLength();

        // Initial setup
        path.style.transition = "none";
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
        path.style.strokeDashoffset = pathLength;
        path.getBoundingClientRect(); // force reflow
        path.style.transition = "stroke-dashoffset 10ms linear";

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            path.style.strokeDashoffset = progress;

            setActive(scroll > 50);
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress(); // initial call

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`progress-wrap ${active ? "active-progress" : ""}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    ref={pathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
        </div>
    );
}
