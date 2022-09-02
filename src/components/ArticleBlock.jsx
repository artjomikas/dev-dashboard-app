import avatar from "../assets/avatar.png";
import banner from "../assets/banner.png";
import { ImArrowUpRight2 } from "react-icons/im";

const ActicleBlock = () => {
  return (
    <div className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 cursor-pointer break-words">
          <img
            src={avatar}
            alt="Avatar of user who made a post"
            className="flex h-8 w-8 md:h-6  md:w-6 rounded-full"
          />
          <div className="flex flex-col ">
            <p className="text-[13px] font-bold leading-[11px]">
              freeCodeCampdddd
            </p>
            <p className="text-[#A8B3CF] text-[11px]">
              @freecodecamp
            </p>
          </div>
        </div>

        <div className="opacity-0 hover:opacity-100">
          <button className="bg-white px-3 py-2  rounded-[8px] ">
            <div className="flex flex-row items-center gap-1">
              <p className="text-black font-semibold text-[12px]">
                Go
              </p>
              <ImArrowUpRight2 className="fill-black text-sm " />
            </div>
          </button>
        </div>
      </div>

      <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 mb-8 leading-[27px] cursor-pointer">
        I've started using Mozilla Firefox
      </p>

      <div className="flex flex-1 flex-col mb-4 cursor-pointer">
        <div className="flex-1"></div>
        <div className="flex items-center text-[#A8B3CF] text-[12px] ">
          Aug 15, 2022 - 1m read time
        </div>
      </div>

      <div className="flex flex-1 flex-col cursor-pointer mb-3">
        <img
          src={banner}
          alt="Image of article"
          className="object-cover h-40 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ActicleBlock;
