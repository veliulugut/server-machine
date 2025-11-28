import BannerSection from "@/components/sections/BannerSection";
import BlogDetails from "@/components/sections/BlogDetails";
import SEO from "@/components/SEO.jsx";
import { useParams } from "react-router-dom";

export default function BlogSLug() {
    const { slug } = useParams();
    const titles = {
        'aile-hukuku-blog-1': 'Aile Hukuku: Boşanma ve Sonrası',
        'ceza-hukuku-blog-1': 'Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi',
        'is-hukuku-blog-1': 'İş Hukukunda Haklar ve Uyuşmazlıklar',
        'ticaret-hukuku-blog-1': 'İş Anlaşmalarında Dikkat Edilecek Hususlar',
        'hukuki-hizmet-blog-1': 'CUMHURBAŞKANINA HAKARET SUÇU (TCK M.299)',
        'medeni-hukuk-blog-1': 'Kusursuz Sorumluluk Nedir?',
        'hukuk-burosu-blog-1': 'Doğru Hukuk Bürosunu Bulmak',
        'kira-hukuku-blog-1': 'Kira İlişkilerinde Hak ve Yükümlülükler'
    };
    const pageTitle = titles[slug] || 'Blog';
    const description = `${pageTitle} hakkında bilgiler`;
    const keywords = `${pageTitle}, Ebru Çulha Hukuk Bürosu, hukuk, avukat`;

    return (
        <>
            <SEO title={`${pageTitle} | Ebru Çulha Hukuk Bürosu`} description={description} keywords={keywords} />
            <BannerSection slug={slug}/>
            <BlogDetails slug={slug} />
        </>
    )
}
