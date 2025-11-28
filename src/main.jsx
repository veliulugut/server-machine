import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import ScrollToTop from "@/lib/ScrollToTop.js";
import AppRoutes from "@/routes.jsx";

// Line Awesome CSS
import '@/assets/css/line-awesome.min.css';
// Font Awesome CSS
import '@/assets/css/fontAwesomePro.css';
// Animate CSS
import '@/assets/css/animate.css';
// Bar Filler CSS
import '@/assets/css/barfiller.css';
// Flaticon CSS
import '@/assets/css/flaticon.css';
// backToTop CSS
import '@/assets/css/backToTop.css';
// Style scss
import '@/assets/scss/style.scss';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ScrollToTop/>
          <AppRoutes/>
      </BrowserRouter>
  </StrictMode>
)
