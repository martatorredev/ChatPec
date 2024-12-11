import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Faqs from "./pages/Faqs/Faqs";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <div>
               <Header />
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faqs" element={<Faqs />} />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
