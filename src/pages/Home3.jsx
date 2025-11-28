import HeroSectionThree from "@/components/sections/HeroSectionThree";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import PromoSection from "@/components/sections/PromoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import ctaBg from "@/assets/img/cta-bg.jpg";
import BlogSectionOne from "@/components/sections/BlogSectionOne";

export default function HomeThree() {
    return (
        <>
            {/*-- Hero Area  --*/}
            <HeroSectionThree/>

            {/*-- About Section  --*/}
            <AboutSectionThree />

            {/*-- Counter Section --*/}
            <CounterSectionOne />

            {/*-- Service Section  --*/}
            <ServiceSectionThree/>

            {/*-- Promo Section  --*/}
            <PromoSection/>

            {/*-- Process Section  --*/}
            <ProcessSection/>


            {/*-- CTA Section  --*/}
            <CtaSection ctaBg={ctaBg}/>

            {/*-- Blog Section  --*/}
            <BlogSectionOne/>
        </>
    )
}
