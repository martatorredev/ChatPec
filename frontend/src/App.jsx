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
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/faqs" element={<Faqs />} />
               <Route path="/privacy_policy" element={<PrivacyPolicy />} />
               <Route path="/legal_disclaimer" element={<LegalNotice/>}/>
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
