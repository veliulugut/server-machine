import {Routes, Route} from 'react-router-dom';

// Import your page components
import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import HomeTwo from "@/pages/Home2.jsx";
import HomeThree from "@/pages/Home3.jsx";
import ContactPage from "@/pages/Contact.jsx";
import ServicesPage from "@/pages/services/Services.jsx";
import ServiceSlug from "@/pages/services/ServiceDetails.jsx";
// Removed unused case routes
import Blog from "@/pages/blog/Blog.jsx";
import BlogSLug from "@/pages/blog/BlogDetails.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="/home-2" element={<HomeTwo/>}/>
                <Route path="/home-3" element={<HomeThree/>}/>
                {/* removed team and pricing routes */}
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/services/:slug" element={<ServiceSlug/>}/>
                {/* removed case routes */}
                <Route path="/yazilar" element={<Blog/>}/>
                <Route path="/yazilar/:slug" element={<BlogSLug/>}/>
            </Route>
        </Routes>
    )
};

export default AppRoutes;
