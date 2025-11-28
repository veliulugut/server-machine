import icon1 from "@/assets/img/contact/1.png";
import icon2 from "@/assets/img/contact/2.png";
import icon3 from "@/assets/img/contact/3.png";

export default function ContactInfoSection() {
    return (
        <div className="contact-info-wrapper section-padding pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <img src={icon1} alt=""/>
                            </div>
                            <p>Başak, Yeşilvadi Cd. Referans Başakşehir Vadi Sitesi D:8AU 1(B) No:67, 34480 Başakşehir/İstanbul</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <img src={icon2} alt=""/>
                            </div>
                            <p><a href="mailto:ebru.culhaa@gmail.com">ebru.culhaa@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <img src={icon3} alt=""/>
                            </div>
                            <p><a href="tel:+905446815433">+90 544 681 54 33</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
