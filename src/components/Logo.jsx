import React from "react";
import logo from "../assets/logo.webp";

const Logo = ({ className }) => {
  return (
    <div
      className={`flex items-center flex-1 flex-row select-none ${className}`}
    >
      <img src={logo} alt="Logo of site" className="h-6" />
      <h1 className="text-white font-medium typo ml-2">dev</h1>
    </div>
  );
};

export default Logo;
