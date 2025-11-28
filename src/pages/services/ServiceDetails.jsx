import Breadcrumb from "@/components/sections/Breadcrumb";
import ServiceDetails from "@/components/sections/ServiceDetails";
import SEO from "@/components/SEO.jsx";
import { useParams } from "react-router-dom";

export default function ServiceSlug() {
    const { slug } = useParams();

    const titles = {
        'aile-hukuku': 'Boşanma‑Aile Hukuku',
        'ceza-hukuku': 'Ceza Hukuku',
        'is-hukuku': 'İş ve Sosyal Güvenlik Hukuku',
        'kira-hukuku': 'Kira Hukuku',
        'icra-hukuku': 'İcra Hukuku'
    };

    const pageTitle = titles[slug] || 'Service Details';
    const menus = [{ label: pageTitle }];
    const descriptions = {
        'aile-hukuku': 'Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde kapsamlı hukuki temsil.',
        'ceza-hukuku': 'Ceza yargılamasında savunma ve hakların etkin korunması.',
        'is-hukuku': 'İşçi‑işveren uyuşmazlıkları ve iş hukuku süreçleri.',
        'kira-hukuku': 'Kira sözleşmeleri, tahliye ve alacak uyuşmazlıkları.',
        'icra-hukuku': 'İcra‑iflas takipleri ve alacakların tahsili.'
    };
    const description = descriptions[slug] || 'Profesyonel hukuk hizmetleri hakkında detaylar.';
    const keywords = `${pageTitle}, Ebru Çulha Hukuk Bürosu, avukat, hukuk`;

    return (
        <>
            <SEO title={`${pageTitle} | Ebru Çulha Hukuk Bürosu`} description={description} keywords={keywords} />
            <Breadcrumb title={pageTitle} menus={menus}/>
            <ServiceDetails slug={slug}/>
        </>
    )
}
