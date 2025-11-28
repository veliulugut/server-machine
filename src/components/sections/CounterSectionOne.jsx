import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";

export default function CounterSectionOne() {
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
        <div id="counter-2" className="counter-section gray-bg section-padding pt-0 pb-60">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span>
                                    <CountUp end={1037} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>
                            </p>
                            <h6>Tamamlanan Dosya</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span>
                                    <CountUp end={156} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>
                            </p>
                            <h6>Nitelikli Ekip</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span>
                                    <CountUp end={90} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>%
                            </p>
                            <h6>Müvekkil Memnuniyeti</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span>
                                    <CountUp end={23} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>+
                            </p>
                            <h6>Yıllık Deneyim</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
