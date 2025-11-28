import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";
import faqImg from "../../../sikcasorulan.png";

export default function FaqSectionOne({ customClass }) {
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
        <div id="faq" className={`faq-section section-padding ${customClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h6>Sıkça Sorulan Sorular</h6>
                            <h2>Hukuki Çözümler <br/> Sunuyoruz</h2>
                        </div>
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            <span></span>Nasıl başvuru yapabilirim?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Büromuza başvurmak için web sitemizdeki iletişim formunu doldurabilir, telefon veya e-posta yoluyla randevu talep edebilirsiniz. İlk değerlendirme sonrasında, konunuza uygun avukatımız sizi bilgilendirerek süreci başlatır.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            <span></span>Hangi uzmanlık alanlarında hizmet veriyorsunuz?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Büromuz aşağıdaki başlıca alanlarda hizmet vermektedir:
                                            <ul>
                                                <li>Aile Hukuku</li>
                                                <li>Ceza Hukuku</li>
                                                <li>İş ve Sosyal Güvenlik Hukuku</li>
                                                <li>Ticaret ve Şirketler Hukuku</li>
                                                <li>Gayrimenkul ve Kira Hukuku</li>
                                                <li>İcra ve İflas Hukuku</li>
                                                <li>Bilişim Hukuku</li>
                                                <li>Tazminat Hukuku</li>
                                                <li>Sözleşmeler Hukuku</li>
                                            </ul>
                                            Hukuki ihtiyacınıza göre uzman avukatlarımız detaylı yönlendirme sağlar.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                            <span></span>Hangi belgeleri hazırlamam gerekiyor?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Hukuki işleme göre gerekli belgeler değişiklik gösterebilir. Randevu sırasında size özel bir liste oluşturulur.
                                            <p>Örnekler:</p>
                                            <ul>
                                                <li>Aile hukukunda: evlilik cüzdanı, nüfus kayıt örneği, delil niteliğindeki belgeler</li>
                                                <li>Ticari davalarda: şirket evrakları, sözleşmeler</li>
                                                <li>Ceza davalarında: ifade tutanakları, delil dosyaları</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                            <span></span>Dava açılması şart mı?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Her durumda dava açılması gerekmeyebilir. Önce uzlaşma, arabuluculuk veya müzakere seçenekleri değerlendirilir. Dava açmak en son başvurulan yöntemdir.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                            <span></span>Süreç ne kadar sürer?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                         aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Hukuki süreçlerin süresi, mahkeme yoğunluğu ve dosyanın niteliğine göre değişir. Somut olayınızı inceleyerek tahmini bir süre tarafınıza bildirilir. Büromuz, süreci düzenli olarak takip eder ve tüm gelişmeleri size iletir.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                aria-expanded="false" aria-controls="collapseEight">
                                            <span></span>Gizlilik politikası nedir?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                         aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Tüm görüşmeler, belgeler ve kişisel bilgileriniz Avukatlık Kanunu kapsamında kesinlikle gizlidir. Üçüncü kişilerle paylaşılmaz.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                aria-expanded="false" aria-controls="collapseTen">
                                            <span></span>Avukat ile vekâletname nasıl çıkartılıyor?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                         aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bize vekâlet vermek için herhangi bir noterlikte “Avukat Vekâletnamesi” düzenlemeniz yeterlidir. Gerekli belgeler:
                                            <ul>
                                                <li>T.C. kimlik kartı</li>
                                                <li>1 adet fotoğraf (bazı işlemler için gerekebilir)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 text-lg-end">
                        <div className="counter-wrap">
                            <div className="counter-img">
                                <img src={faqImg} alt=""/>
                            </div>
                            <div className="counter-content">
                                <div className="single-counter-item dark-bg">
                                    <h6>Mutlu Müvekkiller</h6>
                                    <h1>
                                        <span className="odometer" data-count="124">
                                            <CountUp end={124} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>+
                                    </h1>
                                    <p>Memnun müvekkillerimiz.</p>
                                </div>
                                <div className="single-counter-item theme-bg">
                                    <h6>Avukatlar</h6>
                                    <h1>
                                        <span className="odometer" data-count="3">
                                            <CountUp end={3} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>+
                                    </h1>
                                    <p>Uzman avukat kadromuz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
