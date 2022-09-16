import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineLink,
  AiOutlineLike,
  AiOutlineHistory
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

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
      icon: <AiOutlineLike className="ml-[6px]" />,
    },
    {
      title: "Reading History",
      path: "history",
      icon: <AiOutlineHistory className="ml-[6px]" />,
    },
  ];

  const closeSidebarButton = (
    <div
      className="flex absolute w-6 h-6 top-[68px] -right-3.5 bg-white rounded-full items-center content-center cursor-pointer hover:bg-[#ffffffda] duration-100 ease-out"
      onClick={() => setOpen(!isOpen)}
    >
      {isOpen ? (
        <AiOutlineLeft className="mx-auto mr-[6px] text-[13px]" />
      ) : (
        <AiOutlineRight className="mx-auto ml-[6px] text-[13px]" />
      )}
    </div>
  );

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-60" : "w-16"
        } h-screen relative px-[5px] pt-8 duration-300 border-r-[1px] border-[#2D323B]`}
      >
        {closeSidebarButton}

        <ul className="flex flex-col pt-20 gap-3  ">
          {Menus.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer text-white p-3 rounded-xl bg-[#272a31] items-center hover:scale-[1.05] "
                  : "flex cursor-pointer text-primary p-3 rounded-xl items-center hover:text-white  hover:scale-[1.05] "
              }
            >
              <div className="flex flex-row gap-x-4 items-center">
                <div className="flex items-center">{element.icon}</div>

                <p
                  className={`${
                    !isOpen && "scale-0 "
                  } text-[13px] font-normal  whitespace-nowrap leading-none`}
                >
                  {element.title}
                </p>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default Sidebar;
