import Breadcrumb from "@/components/sections/Breadcrumb";
import SEO from "@/components/SEO.jsx";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ClientSlider from "@/components/sections/ClientSlider";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import PromoSection from "@/components/sections/PromoSection";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";

export default function AboutPage() {
    const menus = [
        {
            label: 'Hakkımızda',
        }
    ];

    return (
        <>
            <SEO title="Hakkımızda | Ebru Çulha Hukuk Bürosu" description="Ebru Çulha Hukuk Bürosu: Deneyimli ekip ve güvenilir hizmet anlayışıyla hukuki çözümler sunar." keywords="hakkımızda, hukuk bürosu, avukat, güvenilir hizmet" />
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Hakkımızda" menus={menus}/>

            {/*-- About Section  --*/}
            <AboutSectionOne/>

            {/*-- Clients Section --*/}
            <div className="client-section section-padding pt-0 pb-60">
                <div className="container">
                    <ClientSlider/>
                </div>
            </div>

            {/*- About Section  --*/}
            <AboutSectionThree />

            {/*-- Counter Section --*/}
            <CounterSectionOne />

            {/*-- Service Section  --*/}
            <ServiceSectionFour/>

            {/*-- Promo Section  --*/}
            <PromoSection />

            {/*-- Testimonial Section  --*/}
            <TestimonialSectionOne/>

            
        </>
    )
}
