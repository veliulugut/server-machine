import { Link } from 'react-router-dom';

export default function CtaSection({ ctaBg }) {
    return (
        <div className="cta-section h-auto pt-80 pb-80 theme-bg" style={{ backgroundImage: `url(${ctaBg})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="cta-title">
                            <div className="section-title">
                                <h2 className="text-white">We solve critical solutions.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 text-md-end">
                        <div className="cta-btn">
                            <Link to="/contact" className="white-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}