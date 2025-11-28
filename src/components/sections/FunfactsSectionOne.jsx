import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";

export default function FunfactsSectionOne() {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.5 }
        );

        const target = counterRef.current;
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div className="funfacts-section gray-bg section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="funfacts-content-left">
                            <div className="section-title">
                                <h6>Law Firm</h6>
                                <h2>We know how to protect</h2>
                            </div>
                            <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed. Beatae vitae dicta sunt.</p>
                            <Link to="/contact" className="dark-btn mt-30">İletişim</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="funfacts-wrap">
                            <div className="funfacts-number">
                                <p className="counter-number">
                                    <span>
                                        <CountUp end={100} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                    </span>+
                                </p>
                            </div>
                            <div className="funfacts-content">
                                <h5>Cases Closed</h5>
                                <p>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="funfacts-wrap">
                            <div className="funfacts-number">
                                <p className="counter-number">
                                    <span>
                                        <CountUp end={2587} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                    </span>
                                </p>
                            </div>
                            <div className="funfacts-content">
                                <h5>Happy Clients</h5>
                                <p>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
