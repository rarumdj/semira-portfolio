import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click);
  };

  const openSubNav = () => {
    setActiveSubNav(!activeSubNav);
  };

  const handleNavClick = () => {
    // if (pathname !== "/") navigate("/");
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

  const cName =
    "cursor-pointer hover:line-through transition-all ease-in-out duration-300";
  const cNameActive = "cursor-pointer line-through font-medium";

  return (
    <header
      className={`py-4 px-8 lg:py-4 lg:px-16 absolute top-0 left-0 right-0 z-50 flex justify-center`}>
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
              <ul className="flex flex-row space-x-8 items-center py-5 text-[#C4C4C4] font-light lg:text-[18px] text-sm">
                <li className="relative">
                  <div
                    className="cursor-pointer hover:line-through group transition-all ease-in-out duration-300"
                    onClick={(e) => {
                      openSubNav();
                    }}>
                    <span className="flex items-center">
                      Stuff I’ve done{" "}
                      <Icon
                        icon="ic:round-keyboard-arrow-down"
                        fontSize={30}
                        color="#c4c4c4"
                        className={`${
                          activeSubNav
                            ? "-rotate-180"
                            : "rotate-0 pointer-events-none"
                        }  ease-in-out duration-700`}
                      />
                    </span>
                  </div>

                  <div
                    className={`min-w-[160px] p-6 absolute top-0 bg-[#1B1B1B] rounded-lg mt-10 transition-all duration-500 ${
                      activeSubNav
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}>
                    <ul className="space-y-3 lg:text-[18px] text-sm font-light text-[#C4C4C4] cursor-pointer ">
                      <li className="hover:text-white transition-all ease-in-out duration-300">
                        CareFair
                      </li>
                      <li className="hover:text-white transition-all ease-in-out duration-300">
                        Nepza OPMS
                      </li>
                      <li className="hover:text-white transition-all ease-in-out duration-300">
                        Sketapp
                      </li>
                      <li className="hover:text-white transition-all ease-in-out duration-300">
                        Jobified
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? cNameActive : cName
                    }
                    to="about"
                    onClick={handleNavClick}>
                    About me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? cNameActive : cName
                    }
                    to="/contact"
                    onClick={handleNavClick}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                    to="#resume"
                    onClick={handleNavClick}>
                    Resumé
                  </NavLink>
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
                  <ul className="flex text-[18px] flex-col space-y-10 items-start text-[#c4c4c4] font-semibold ">
                    <li className="relative">
                      <div
                        className="cursor-pointer hover:line-through group transition-all ease-in-out duration-300"
                        onClick={(e) => {
                          openSubNav();
                        }}>
                        <span className="flex items-center">
                          Stuff I’ve done{" "}
                          <Icon
                            icon="ic:round-keyboard-arrow-down"
                            fontSize={30}
                            color="#c4c4c4"
                            className={`${
                              activeSubNav
                                ? "-rotate-180"
                                : "rotate-0 pointer-events-none"
                            }  ease-in-out duration-700`}
                          />
                        </span>
                      </div>

                      <div
                        className={`min-w-[160px] p-6 top-0 bg-[#1B1B1B] rounded-lg mt-10 transition-all duration-500 ${
                          activeSubNav
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none absolute"
                        }`}>
                        <ul className="space-y-3 lg:text-[18px] text-sm font-light text-[#C4C4C4] cursor-pointer ">
                          <li className="hover:text-white transition-all ease-in-out duration-300">
                            CareFair
                          </li>
                          <li className="hover:text-white transition-all ease-in-out duration-300">
                            Nepza OPMS
                          </li>
                          <li className="hover:text-white transition-all ease-in-out duration-300">
                            Sketapp
                          </li>
                          <li className="hover:text-white transition-all ease-in-out duration-300">
                            Jobified
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? cNameActive : cName
                        }
                        to="about"
                        onClick={handleNavClick}>
                        About me
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? cNameActive : cName
                        }
                        to="/contact"
                        onClick={handleNavClick}>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="cursor-pointer hover:line-through transition-all ease-in-out duration-300"
                        to="#resume"
                        onClick={handleNavClick}>
                        Resumé
                      </NavLink>
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
