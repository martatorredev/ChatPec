import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Faqs from "./pages/Faqs/Faqs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice/LegalNotice";

function App() {
   /* useEffect(() => {
      var _paq = (window._paq = window._paq || []);
      // tracker methods like "setCustomDimension" should be called before "trackPageView"
      _paq.push(["disableCookies"]);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
         var u = "//analytics.chatpec.com/";
         _paq.push(["setTrackerUrl", u + "matomo.php"]);
         _paq.push(["setSiteId", "1"]);
         var d = document,
            g = d.createElement("script"),
            s = d.getElementsByTagName("script")[0];
         g.async = true;
         g.src = u + "matomo.js";
         s.parentNode.insertBefore(g, s);
      })();
   }, []);
   */

   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/faqs" element={<Faqs />} />
               <Route path="/privacy_policy" element={<PrivacyPolicy />} />
               <Route path="/legal_disclaimer" element={<LegalNotice />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
