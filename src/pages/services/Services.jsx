import Breadcrumb from "@/components/sections/Breadcrumb";
import SEO from "@/components/SEO.jsx";
import ServiceSectionSix from "@/components/sections/ServiceSectionSix";
import VideoSectionTwo from "@/components/sections/VideoSectionTwo";
import PromoSection from "@/components/sections/PromoSection";
import CtaSectionTwo from "@/components/sections/CtaSectionTwo";

export default function ServicesPage() {
    const menus = [
        {
            label: 'Practice Areas'
        }
    ];

    return (
        <>
            <SEO title="Hizmetlerimiz | Ebru Çulha Hukuk Bürosu" description="Aile, Ceza, İş, Ticaret, Kira ve İcra Hukuku alanlarında uzman hukuki hizmetler." keywords="hizmetler, aile hukuku, ceza hukuku, iş hukuku, ticaret hukuku, kira hukuku, icra hukuku" />
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Practice Areas" menus={menus}/>

            {/*-- Service Section  --*/}
            <ServiceSectionSix/>

            {/*-- Video Section  --*/}
            <VideoSectionTwo/>

            {/*-- Promo Section  --*/}
            <PromoSection/>

            {/*-- CTA Section  --*/}
            <CtaSectionTwo/>

        </>
    )
}
