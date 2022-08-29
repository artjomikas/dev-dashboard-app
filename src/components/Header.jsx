import logo from "../assets/logo.svg";
import { useState } from "react";
import { AiOutlineClose, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <div className="h-16 border-b-[#a8b3cf33] border-b-[1px] flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 flex-1 flex-row">
          <img src={logo} alt="Logo of site" className="h-8 " />
          <h1 className="text-white font-medium text-[15px]">dev</h1>
        </div>

        <button
          className="flex px-8 py-2 bg-white rounded-[12px] font-semibold border leading-[20px] hover:bg-[#D2D9E9] text-[14px] hover:shadow-lg"
          onClick={() => setShowModal(!showModal)}
        >
          Sign in
        </button>
      </div>

      {showModal ? (
        <>
          <div className="bg-[#ffffff3d] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none px-4">
            <div className="relative mx-auto max-w-[450px] max-h-full w-full">
              <div className="relative flex flex-col w-full bg-[#17191F] outline-none rounded-xl shadow-lg  p-6 text-center">
                <div className="flex items-center gap-2 flex-1 flex-row justify-center mb-8 select-none">
                  <FcGoogle />
                  <h1 className="text-white font-medium text-[15px]">dev</h1>
                </div>

                <AiOutlineClose
                  className="absolute text-[25px] right-3 fill-[#cfd6e6] cursor-pointer"
                  onClick={() => setShowModal(!showModal)}
                />

                <span className="text-[#cfd6e6] text-[15px] mb-8">
                  Unlock useful features by signing in. A bunch of cool stuff
                  like content filters and bookmarks are waiting just for you.
                </span>

                <div className="flex flex-col items-stretch self-center">
                  <button className="bg-white hover:bg-[#d9e1f3] my-2 font-medium text-[15px] leading-[20px] h-10 rounded-[12px] px-[23px] flex flex-row items-center">
                    <AiOutlineGithub className="text-[23px] mr-2" />
                    <span>Connect with GitHub</span>
                  </button>

                  <button className="bg-white hover:bg-[#d9e1f3] my-2 font-medium text-[15px] leading-[20px] h-10 rounded-[12px] px-[23px] flex flex-row items-center">
                    <FcGoogle className="text-[23px] mr-2" />
                    Connect with Google
                  </button>

                  <button className="bg-white hover:bg-[#d9e1f3] my-2 font-medium text-[15px] leading-[20px] h-10 rounded-[12px] px-[23px] flex flex-row items-center ">
                    <AiOutlineMail className="text-[23px] mr-2" />
                    Connect with Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
