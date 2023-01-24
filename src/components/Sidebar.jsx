import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLink,
  AiOutlineHistory,
} from "react-icons/ai";

import { BsBookmarks } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import AddArticleModal from "./Articles/AddArticleModal";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const Menus = [
    { title: "Home", path: "", icon: <AiOutlineHome className="ml-[6px]" /> },
    {
      title: "Popular",
      path: "popular",
      icon: <AiOutlineFire className="ml-[6px]" />,
    },
    {
      title: "Submit Article",
      path: "submit",
      icon: <AiOutlineLink className="ml-[6px]" />,
    },
    {
      title: "Bookmarks",
      path: "bookmarks",
      icon: <BsBookmarks className="ml-[6px] text-[15px]" />,
    },
    {
      title: "Reading History",
      path: "history",
      icon: <AiOutlineHistory className="ml-[6px]" />,
    },
  ];

  const closeSidebarButton = (
    <div
      className="hidden sm:flex absolute w-6 h-6 top-[68px] -right-3.5 bg-white rounded-full items-center content-center cursor-pointer hover:bg-[#ffffffda] duration-100 ease-out"
      onClick={() => setOpen(!isOpen)}>
      {isOpen ? (
        <AiOutlineLeft className="mx-auto mr-[6px] text-[13px]" />
      ) : (
        <AiOutlineRight className="mx-auto ml-[6px] text-[13px]" />
      )}
    </div>
  );

  return (
    <div className="flex">
      <BiMenu
        className="text-white fixed z-100 top-5 left-5 cursor-pointer block sm:hidden"
        size="29"
        onClick={() => setMobile(!isMobile)}
      />

      <div
        className={`${
          isOpen || isMobile ? "w-60" : "w-16"
        }  duration-300 border-r-[1px] border-[#2D323B] ${
          isMobile
            ? "bg-white fixed top-0 w-[50%] h-screen bg-[#1C1F26] left-0 z-20 border-r-[1px] text-white"
            : "hidden sm:block min-h-screen relative px-[5px] pt-8"
        } `}>
        {closeSidebarButton}

        {isMobile && (
          <BiX
            className="text-white fixed z-100 top-5 left-5 cursor-pointer block sm:hidden"
            size="29"
            onClick={() => setMobile(!isMobile)}
          />
        )}

        <ul className="flex flex-col pt-20 gap-3  ">
          {Menus.map((element, index) => (
            <NavLink
              to={element.path !== "submit" && element.path}
              key={index}
              onClick={() => {
                element.path === "submit" && setShowModal(!showModal);
                setMobile(false);
              }}
              className={
                location.pathname === "/" + element.path
                  ? "flex cursor-pointer text-white p-3 rounded-md bg-[#272a31] items-center hover:scale-[1.05] "
                  : "flex cursor-pointer text-primary p-3 rounded-md items-center hover:text-white  hover:scale-[1.05] "
              }>
              <div className="flex flex-row gap-x-4 items-center">
                <div className="flex items-center">{element.icon}</div>
                <p
                  className={`${!isOpen && "scale-0 "}  ${
                    isMobile && "scale-110 "
                  } text-[13px] font-normal  whitespace-nowrap leading-none`}>
                  {element.title}
                </p>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
      {showModal && <AddArticleModal setShowModal={setShowModal} />}
      {children}
    </div>
  );
};

export default Sidebar;
