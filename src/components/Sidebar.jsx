import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(true);

  const Menus = [
    { title: "Home", path: "" },
    { title: "Popular", path: "popular" },
    { title: "Submit Article", path: "submit" },
    { title: "Bookmarks", path: "bookmarks" },
    { title: "Reading History", path: "history" },
  ];

  const buttonMinimazer = (
    <div
      className="flex absolute w-6 h-6 top-[68px] -right-3.5 bg-white rounded-full items-center content-center cursor-pointer hover:bg-[#ffffffda] duration-100 ease-out"
      onClick={() => setOpen(!isOpen)}
    >
      {isOpen ? (
        <FiChevronLeft className="mx-auto mr-[5px]" />
      ) : (
        <FiChevronRight className="mx-auto ml-[5px]" />
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
        {buttonMinimazer}

        <ul className="flex flex-col pt-20 gap-2 ">
          {Menus.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer text-white p-3 rounded-xl bg-[#272a31] items-center hover:scale-[1.05] duration-100 ease-out"
                  : "flex cursor-pointer text-primary p-3 rounded-xl items-center hover:text-white  hover:scale-[1.05] duration-100 ease-out"
              }
            >
              <p
                className={`${
                  !isOpen && "scale-0 "
                } text-[13px] font-medium  whitespace-nowrap`}
              >
                {element.title}
              </p>
            </NavLink>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default Sidebar;
