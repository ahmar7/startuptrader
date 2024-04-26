import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NotificationIcon from "../Icons/NotificationIcon";
import Language from "../Icons/Language";
import BuyMoreModal from "../Model/BuyMoreModal";
import { clientNavbar } from "../Constant/index";
import { useNavigate, useLocation, Link } from "react-router-dom";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarClient() {
  const [isHovered, setIsHovered] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="main-nav bg-[#050511]  ">
          {({ open }) => (
            <>
              <div className="  px-4 sm:px-6 lg:px-8 section-width">
                <div className="flex h-[72px]  items-center w-full justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img src="/images/dark.png" alt="" className="" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex xl:gap-4">
                      {clientNavbar.map((item, index) => (
                        <Disclosure.Button key={item.name} as="a">
                          <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`flex items-center   space-x-4 px-3 py-3 rounded-md cursor-pointer 
                                hover:bg-[#1C2642] transition-colors duration-200
                                `}
                          >
                            <p
                              className={`text-[14px] font-manrope transition-colors duration-200 ${
                                location.pathname === item.path
                                  ? "text-[#439CFF]"
                                  : "text-[#CCCED5]"
                              } 
                                  `}
                            >
                              {item.name}
                            </p>
                          </div>
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className=" flex gap-6 items-center ">
                      <Link to="/login">
                        {" "}
                        <button className=" font-manrope text-white text-[12px] h-[32px] w-[86px] border px-1 rounded-full shadow-md transition-all duration-300 ease-in-out">
                          Log in
                        </button>
                      </Link>
                      <Link to="/dashboard">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-white text-sm h-[32px] w-[86px] px-1 rounded-full shadow-md transition-all duration-300 ease-in-out">
                          Exchange
                        </button>
                      </Link>

                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden absolute w-full bg-[#171f38] border-b-[1px] border-b-[#333C57] z-10">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {clientNavbar.map((item, index) => (
                    <Disclosure.Button key={item.name} as="a" href={item.path}>
                      <div
                        key={index}
                        onClick={() => navigate(item.path)}
                        className={`flex items-center   space-x-4 px-3 py-3 rounded-md cursor-pointer 
                                hover:bg-[#1C2642] transition-colors duration-200
                                ${
                                  location.pathname === item.path
                                    ? "bg-[#1C2642]"
                                    : "bg-transparent"
                                }`}
                      >
                        <p
                          className={`text-xl font-manrope transition-colors duration-200 ${
                            location.pathname === item.path
                              ? "text-[#439CFF]"
                              : "text-[#CCCED5]"
                          } 
                                  `}
                        >
                          {item.name}
                        </p>
                      </div>
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-24px">
                    <div className="flex-shrink-0">
                      <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-white text-sm h-[32px] w-[86px] px-1 rounded-full shadow-md transition-all duration-300 ease-in-out">
                        Exchange
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
