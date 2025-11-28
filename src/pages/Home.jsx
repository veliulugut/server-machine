import HeroSectionOne from "@/components/sections/HeroSectionOne";
import SEO from "@/components/SEO.jsx";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ClientsSectionOne from "@/components/sections/ClientsSectionOne";
import VideoSection from "@/components/sections/VideoSection";
import FaqSectionOne from "@/components/sections/FaqSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";
import NewsletterSection from "@/components/sections/NewsletterSection";

import videoBgImg from '../../büyükfoto.png';

export default function Home() {
    return (
        <>
            <SEO title="Ana Sayfa | Ebru Çulha Hukuk Bürosu" description="Ebru Çulha Hukuk Bürosu: Aile, Ceza, İş ve Ticaret Hukuku alanlarında profesyonel hukuki danışmanlık." keywords="Ebru Çulha, hukuk bürosu, avukat, aile hukuku, ceza hukuku, iş hukuku, ticaret hukuku" structuredData={{"@context":"https://schema.org","@type":"LegalService","name":"Ebru Çulha Hukuk Bürosu","url": typeof window!=="undefined"? window.location.origin : "","telephone":"+90 544 681 54 33","email":"ebru.culhaa@gmail.com","address":{"@type":"PostalAddress","addressLocality":"İstanbul","addressRegion":"TR","postalCode":"34480","streetAddress":"Başak, Yeşilvadi Cd. Referans Başakşehir Vadi Sitesi D:8AU 1(B) No:67"}}} />
            {/*-- Hero Area  --*/}
            <HeroSectionOne/>

            {/*-- Service Section --*/}
            <ServiceSectionOne/>

            {/*-- About Section  --*/}
            <AboutSectionOne/>

            {/*-- Clients Section --*/}
            <ClientsSectionOne/>

            {/*-- Video Section  --*/}
            <VideoSection videoBgImg={videoBgImg}/>


            {/*-- FAQ Section  --*/}
            <FaqSectionOne/>

            {/*-- Testimonial Section  --*/}
            <TestimonialSectionOne/>

            {/*-- Blog Section  --*/}
            <BlogSectionOne/>

            {/*-- Newsletter Section  --*/}
            <NewsletterSection />
        </>
    );
}
