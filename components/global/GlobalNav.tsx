import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HomeIcon,
  MenuIcon,
  XIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

type GlobalNavProps = {
  customNavItems?: React.ReactElement[],
};

const GlobalNav: React.FC<GlobalNavProps> = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverOpenDropDown, sethoverOpenDropDown] = useState(false);
  const [focusOpenDropDown, setfocusOpenDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navLinksRef = useRef(null);
  const containerRef = useRef(null);


  const getMenuWidth = () => {
    let menuWidth = 0;

    if (navLinksRef.current) {
      navLinksRef.current.childNodes.forEach(
        (child: { offsetWidth: number }) => {
          menuWidth += child.offsetWidth;
        }
      );
    }
    return menuWidth;
  };

const checkMenuSize = () => {
  if (navLinksRef.current && containerRef.current) {
    const navLinksWidth = getMenuWidth();
    const containerWidth = (containerRef.current as HTMLElement).offsetWidth;
    setShowHamburger(navLinksWidth > containerWidth);
  }
  };

  useEffect(() => {
    checkMenuSize();
    const resizeHandler = () => {
      checkMenuSize();
    };

    let resizeTimeout;

    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeHandler();
          resizeTimeout = null;
        }, 66);
      }
    };

    window.addEventListener("resize", resizeThrottler);

    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      window.removeEventListener("resize", resizeThrottler);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-100 py-4 shadow-lg block justify-center">
      <nav className="relative h-2">
        {/* Other nav elements go here */}

        <div className="absolute right-0 top-50 bottom-0 mr-4 flex items-center justify-center h-full">
          <button
            onClick={handleMenuToggle}
            className={`${
              showHamburger ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900`}
          >
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className="container mx-auto px-4 lg:px-6 xl:px-8"
        ref={containerRef}>
        <div className="block justify-between items-center h-16 w-full">
          <div
            ref={navLinksRef}
            className={`${
              showHamburger ? "opacity-0 invisible" : "opacity-100 visible"
            } transition-all duration-300 flex items-center ml-6 space-x-4 justify-center`}>
            <Link
              href="/"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-800 focus:outline-none focus:text-gray-800 space-y-2 hover:bg-white focus:bg-white" >
              <HomeIcon className="h-8 w-auto text-indigo-500" />
            </Link>
                         
            <div className="relative inline-block text-left">
              <button
                onClick={() => setDropdownOpen((prevState) => !prevState)}
                onBlur={() => setDropdownOpen(false)}
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold">
                   <InformationCircleIcon className="h-5 w-5 inline mr-2" />
                About
              </button>
              {dropdownOpen && (
                <div className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 py-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/intro"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      Intro
                    </Link>
                                       <Link
                      href="/components"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      Components
                    </Link>
                                       <Link
                      href="/installation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      Installation
                    </Link>
                                  <Link
                      href="/technology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      Technology
                    </Link>
                  </div>
                </div>
              )}
             
            </div>

            <Link
              href="/structure"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-800 hover:text-gray-800 focus:outline-none focus:text-gray-800 space-y-2 hover:bg-white focus:bg-white">
              Structure
            </Link>
            <Link
              href="/usage"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              Usage
            </Link>
              <Link
              href="/interoperability"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              Interoperability
            </Link>
              <Link
              href="/customization"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              Customization
            </Link>
               <Link
              href="/optimizations"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              508 & SEO
            </Link>
            
            <div className="relative inline-block text-left">
              <button
                onMouseEnter={() => sethoverOpenDropDown(true)}
                onMouseLeave={() => sethoverOpenDropDown(false)}
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold">
                onHover
              </button>
              {hoverOpenDropDown && (
                <div className="origin-center absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/link1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem" >
                      shows on:
                    </Link>
                    <Link
                      href="/link2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      mouseEnter
                    </Link>
                    <Link
                      href="/link3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      mouseLeave
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative grid text-left">
              <Link
                href="/how-it-works"
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white"
                onFocus={() => setfocusOpenDropDown(true)}
                onBlur={() => setfocusOpenDropDown(false)}>
                onFocus
              </Link>
              {focusOpenDropDown && (
                <div
                  className="origin-top-center absolute left-1/2 transform -translate-x-1/2 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 pl-4 dropdown"
                  style={{ top: "28px" }}>
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/link1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      shows on:
                    </Link>
                    <Link
                      href="/link2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      onFocus
                    </Link>
                    <Link
                      href="/link3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                      onBlur
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${
            menuOpen && showHamburger ? "block" : "hidden"
          } mt-16 text-center`}>
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold w-full text-center">
              <HomeIcon className="h-8 w-auto text-indigo-500 mx-auto" />
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold w-full text-center">
              <InformationCircleIcon className="h-5 w-5 inline mr-2" />
            </Link>
            <Link
              href="/components"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              Components
            </Link>
            <Link
              href="/usageAnywhere"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              Usage Anywhere
            </Link>
            <Link
              href="/howItWorks"
              className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white">
              How-it-Works
            </Link>

            <div className="relative grid text-left">
              <button
                onClick={() => sethoverOpenDropDown((prevState) => !prevState)}
                onBlur={() => setDropdownOpen(false)}
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold">
                onClick
              </button>
              {dropdownOpen && (
                <div className="origin-center absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/link1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem" >
                      Link 1
                    </Link>
                  </div>
                </div>
              )}  
            </div>

            <div className="relative grid text-left">
              <button
                onMouseEnter={() => sethoverOpenDropDown(true)}
                onMouseLeave={() => sethoverOpenDropDown(false)}
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white hover:font-extrabold focus:font-extrabold" >
                onHover
              </button>
              {hoverOpenDropDown && (
                <div
                  className="origin-top-center absolute left-1/2 transform -translate-x-1/2 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 pl-4 dropdown"
                  style={{ top: "28px" }}>
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/link1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem" >
                      Link 1
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative grid text-left justify-items-center">
              <Link
                href="/howItWorks"
                className="block px-3 py-2 ml-4 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 space-y-2 hover:bg-white focus:bg-white"
                onFocus={() => setfocusOpenDropDown(true)}
                onBlur={() => setfocusOpenDropDown(false)}>
                onFocus
              </Link>
              {focusOpenDropDown && (
                <div
                  className="origin-top-center absolute left-1/2 transform -translate-x-1/2 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 pl-4 dropdown"
                  style={{ top: "28px" }}>
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      href="/link1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem">
                     Link 1
                    </Link>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
