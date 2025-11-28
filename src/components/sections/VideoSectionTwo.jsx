import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect} from "react";
import videoBg from "@/assets/img/video-bg-3.jpg";

export default function VideoSectionTwo() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="service-page video-section">
            <div className="container">
                <div className="video-inner-box" style={{ backgroundImage: `url(${videoBg})`}}>
                    <div className="play-btn">
                        <a data-fancybox href="https://www.youtube.com/watch?v=7q0TRgDvT9k" className="video-play-btn mfp-iframe">
                            <i className="las la-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}