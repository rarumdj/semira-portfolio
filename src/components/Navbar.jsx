import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click);
  };

  const handleNavClick = () => {
    if (pathname !== "/") Navigate("/");
    setClick(false);

    return;
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 80
        ? setStickyClass("bg-[#f9f5f2] bg-opacity-10 backdrop-blur-md")
        : setStickyClass("");
    }
  };

  return (
    <header
      className={`py-4 px-8 lg:py-4 lg:px-16 fixed top-0 left-0 right-0 z-50 flex justify-center ${stickyClass}`}>
      <nav className="flex flex-row justify-between items-center w-screen max-w-[110rem] xl:px-20 px-0">
        <div className="z-50">
          <NavLink to="/">
            <Logo className="p-1" />
          </NavLink>
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 md:hidden block absolute z-50"
            onClick={handleClick}>
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              color="fff"
            />
          </button>
          <aside>
            <nav className="md:flex hidden lg:space-x-36 space-x-8">
              <ul className="flex flex-row space-x-8 items-center py-5 text-white font-medium lg:text-base text-sm">
                <li>
                  <a
                    className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                    href="#eligibility"
                    onClick={handleNavClick}>
                    Stuff I’ve done
                  </a>
                </li>
                <li>
                  <NavLink
                    className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                    to="about"
                    onClick={handleNavClick}>
                    About me
                  </NavLink>
                </li>
                <li>
                  <a
                    className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                    href="#contact"
                    onClick={handleNavClick}>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                    href="#resume"
                    onClick={handleNavClick}>
                    Resumé
                  </a>
                </li>
              </ul>
            </nav>

            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`md:hidden block bg-[#1b1b1b] absolute top-0 left-0 right-0 bottom-0 min-h-screen`}>
              <div className="flex flex-col pt-36 h-full items-center min-w-full px-8">
                <div className="space-y-16 w-full max-w-md">
                  <ul className="flex flex-col space-y-10 items-start text-white font-semibold ">
                    <li>
                      <a
                        className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                        href="#eligibility"
                        onClick={handleNavClick}>
                        Stuff I’ve done
                      </a>
                    </li>
                    <li>
                      <NavLink
                        className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                        to="about"
                        onClick={handleNavClick}>
                        About me
                      </NavLink>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                        href="#contact"
                        onClick={handleNavClick}>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                        href="#resume"
                        onClick={handleNavClick}>
                        Resumé
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
