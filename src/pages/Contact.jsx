import Breadcrumb from "@/components/sections/Breadcrumb";
import SEO from "@/components/SEO.jsx";
import GoogleMap from "@/components/sections/GoogleMap";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactSectionOne from "@/components/sections/ContactSectionOne";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function ContactPage() {
    const menus = [
        {
            label: 'İletişim'
        }
    ];

    return (
        <>
            <SEO title="İletişim | Ebru Çulha Hukuk Bürosu" description="Ebru Çulha Hukuk Bürosu ile iletişime geçin: Telefon +90 544 681 54 33, e-posta ebru.culhaa@gmail.com." keywords="iletişim, telefon, e-posta, hukuk bürosu" structuredData={{"@context":"https://schema.org","@type":"Organization","name":"Ebru Çulha Hukuk Bürosu","url": typeof window!=="undefined"? window.location.href : "","contactPoint":{"@type":"ContactPoint","telephone":"+90 544 681 54 33","contactType":"customer service","email":"ebru.culhaa@gmail.com"}}} />
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="İletişim" menus={menus}/>

            {/*-- Google Map Start--*/}
            <GoogleMap/>

            {/*-- Contact Info --*/}
            <ContactInfoSection/>

            {/*-- Contact Section  --*/}
            <ContactSectionOne/>

            {/*-- Newsletter Section  --*/}
            <NewsletterSection/>
        </>
    )
}
