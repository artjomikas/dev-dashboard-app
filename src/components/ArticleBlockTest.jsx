import avatar from "../assets/avatar.png";
import banner from "../assets/banner.png";
import { ImArrowUpRight2 } from "react-icons/im";

const ActicleBlockTest = () => {
  return (
    <div className="bg-[#1C1F26] relative rounded-2xl flex flex-col h-full p-4 max-w-[360px]">

        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <img src={avatar} alt="" className="flex h-8 w-8 rounded-full" />
            <div className="">
              <p className="text-[12px] font-bold leading-[10px]">
                Game Developer
              </p>
              <p className="text-[#A8B3CF] text-[10px]">@gamedeveloper</p>
            </div>
          </div>

          <button className="bg-white px-3 py-2 rounded-[8px]">
            <div className="flex items-center gap-1">
              <p className="text-black font-semibold text-[12px]">
                Read article
              </p>
              <ImArrowUpRight2 className="fill-black text-sm " />
            </div>
          </button>
        </div>

        <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 my-2">
          The Pokemon Company sues over Chinese imitator Pocket Monster Reissue
        </p>

        <div className="relative flex flex-1 flex-col mb-2">
          <div className="flex-1"></div>
          <div className="flex items-center text-[#A8B3CF] text-[12px] ">
            Aug 15, 2022 - 1m read time{" "}
          </div>
        </div>

        <div className="relative flex flex-1 flex-col ">
          <img src={banner} alt="" className="object-cover" />
        </div>
 
    </div>
  );
};

export default ActicleBlockTest;
