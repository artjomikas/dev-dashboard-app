import avatar from "../assets/avatar.png";
import banner from "../assets/banner.png";
import { ImArrowUpRight2 } from "react-icons/im";

const ActicleBlock = () => {
  return (
    <div className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 md:p-1.5 xl:p-3 max-w-[310px] w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <img
            src={avatar}
            alt="Avatar of user who made a post"
            className="flex h-8 w-8 md:h-6  md:w-6 rounded-full"
          />
          <div className="">
            <p className="text-[12px] md:text-[10px] xl:text-[12px] font-bold leading-[10px] ">
              freeCodeCamp
            </p>
            <p className="text-[#A8B3CF] text-[10px] md:text-[8px] xl:text-[10px]">
              @freecodecamp
            </p>
          </div>
        </div>

        <div className="opacity-0 hover:opacity-100">
          <button className="bg-white px-3 md:px-2 xl:px-3 py-2 md:py-0 xl:py-2 rounded-[8px] ">
            <div className="flex flex-row items-center gap-1">
              <p className="text-black font-semibold text-[12px] md:text-[10px] xl:text-[12px]">
                Read article
              </p>
              <ImArrowUpRight2 className="fill-black text-sm " />
            </div>
          </button>
        </div>
      </div>

      <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 mb-5 leading-[27px] cursor-pointer">
        I've started using Mozilla Firefox
      </p>

      <div className="flex flex-1 flex-col mb-2 cursor-pointer">
        <div className="flex-1"></div>
        <div className="flex items-center text-[#A8B3CF] text-[12px] ">
          Aug 15, 2022 - 1m read time
        </div>
      </div>

      <div className="flex flex-1 flex-col cursor-pointer">
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
