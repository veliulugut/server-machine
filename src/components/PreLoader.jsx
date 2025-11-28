import {useEffect, useState} from "react";

export default function PreLoader() {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const hideLoader = () => {
            setTimeout(() => setIsComplete(true), 500);
        };

        if (document.readyState === "complete") {
            hideLoader();
        } else {
            const onReady = () => {
                if (document.readyState === "complete") {
                    hideLoader();
                }
            };
            document.addEventListener("readystatechange", onReady);
            return () => document.removeEventListener("readystatechange", onReady);
        }
    }, []);

    if (isComplete) return null;

    return <div id="loader" />;
}