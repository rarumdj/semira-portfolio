import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import "swiper/css/bundle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

import { Icon } from "@iconify/react";
import ScrollToTop from "react-scroll-to-top";
import Jobified from "./containers/CaseStudies/Jobified";

function App() {
  const location = useLocation();
  

  useEffect(
    () => {
      const html = document.querySelector("html");

      html.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      html.style.scrollBehavior = "";
    },
    [location.pathname]
    // []
  );


  const DefaultRoutes = () => {
    return (
      <div className="relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/jobified" element={<Jobified />}></Route>
            
          </Routes>

          <ScrollToTop
            smooth
            component={<Icon icon="ep:arrow-up" color="#fff" className="text-[20px]" />}
            color=""
            className="!md:w-14 !md:h-14 !w-10 !h-10 !bg-[#F28F8F] !rounded-full !flex !justify-center !items-center !m-auto"
          />
        </main>

        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<DefaultRoutes />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
