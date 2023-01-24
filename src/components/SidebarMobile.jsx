import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLink,
  AiOutlineHistory,
} from "react-icons/ai";

import { BsBookmarks } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import AddArticleModal from "./Articles/AddArticleModal";


const SidebarMobile = ({open, setOpen}) => {
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

  return (
    <div className="flex flex-col absolute top-0 w-[50%] h-screen bg-[#1C1F26] left-0 z-50 border-r-[1px] text-white">
    SidebarMobile
    </div>
  )
}

export default SidebarMobile