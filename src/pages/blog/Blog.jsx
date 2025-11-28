import Breadcrumb from "@/components/sections/Breadcrumb";
import SEO from "@/components/SEO.jsx";
import BlogPageSection from "@/components/sections/BlogPageSection";

export default function Blog(){
    const menus = [
        {
            label: 'Yazılar'
        }
    ];

    return (
        <>
            <SEO title="Yazılar | Ebru Çulha Hukuk Bürosu" description="Hukuk alanındaki yazılarımız ve yayınlarımız." keywords="yazılar, yayınlar, hukuk blog" />
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Yazılar" menus={menus}/>

            {/*-- Blog Page  --*/}
            <BlogPageSection/>
        </>
    )
}
