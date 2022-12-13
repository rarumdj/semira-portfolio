import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import "swiper/css/bundle";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import React, { useCallback } from "react";

import ScrollToTop from "react-scroll-to-top";
import { Icon } from "@iconify/react";

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
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
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
