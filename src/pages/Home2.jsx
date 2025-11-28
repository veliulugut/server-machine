import HeroSectionTwo from "@/components/sections/HeroSectionTwo";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import FunfactsSectionOne from "@/components/sections/FunfactsSectionOne";
import VideoSection from "@/components/sections/VideoSection";

import videoBgImg from '@/assets/img/video-bg-2.jpg';
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";
import CtaSection from "@/components/sections/CtaSection";

export default function HomeTwo() {
    return (
        <>
            {/*-- Hero Area  --*/}
            <HeroSectionTwo/>

            {/*-- Service Section  --*/}
            <ServiceSectionTwo />

            {/*-- About Section  --*/}
            <AboutSectionTwo />

            {/*-- Funfacts Section  --*/}
            <FunfactsSectionOne />

            {/*-- Video Section  --*/}
            <VideoSection videoBgImg={videoBgImg}/>

            {/*-- Case Studies --*/}
            <CaseStudiesSection />


            {/*-- Testimonial Section  --*/}
            <TestimonialSectionTwo />

            {/*-- Blog Section  --*/}
            <BlogSectionTwo />

            {/*-- CTA Section  --*/}
            <CtaSection />
        </>
    )
}
