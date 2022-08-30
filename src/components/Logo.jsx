import React from "react";
import logo from "../assets/logo.webp";

const Logo = (props) => {
  const additionalClassname = props.className;
  return (
    <div
      className={`flex items-center gap-2 flex-1 flex-row select-none ${additionalClassname}`}
    >
      <img src={logo} alt="Logo of site" className="h-6" />
      <h1 className="text-white font-medium text-[15px] leading-[20px]">dev</h1>
    </div>
  );
};

export default Logo;
