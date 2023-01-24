import { useState } from "react";
import logo from "../assets/logo.webp";
import { BiMenu } from "react-icons/bi";
import SidebarMobile from "./SidebarMobile";

const Logo = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`hidden sm:flex items-center flex-1 flex-row select-none ${className}`}>
      <img src={logo} alt="Logo of site" className="h-6" />
      <h1 className="text-white font-medium typo ml-2">dev</h1>
    </div>
  );
};

export default Logo;
