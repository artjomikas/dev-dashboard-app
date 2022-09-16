import {
  AiOutlineEnter,
  AiOutlineMore,
  AiOutlineMessage,
} from "react-icons/ai";

import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";

import Like from "./Like";
import Author from "../Author";
import DateOfPosting from "../Date";
import DropDownMore from "../DropDownMore";

const ActicleBlock = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
      ref={hoverRef}
    >
      <div className="flex flex-row justify-between w-full">
        <Author author={props.author} />

        <div className={isHover ? `opacity-100` : `opacity-0`}>
          <a href={props.permaLink} target="_blank">
            <button className="bg-white px-3 py-2 rounded-[8px] ">
              <div className="flex flex-row items-center gap-1">
                <p className="text-black font-semibold text-[12px]">Go</p>
                <AiOutlineEnter className="fill-black text-sm mb-[2px] text-[14px]" />
              </div>
            </button>
          </a>
        </div>
      </div>

      <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 mb-1 leading-[27px] cursor-pointer">
        {props.title}
      </p>

      <div className="flex flex-1 flex-col mb-2 cursor-pointer">
        <div className="flex-1"></div>
        <DateOfPosting readTime={props.readTime} postDate={props.createdAt} />
      </div>

      <div className="flex flex-1 flex-col cursor-pointer mb-2">
        <img
          src={props.imageURL}
          alt="Image of article"
          className="object-cover h-40 rounded-2xl"
        />
      </div>

      {props.liked == undefined ? (
        <div className="flex max-h-[30px] h-full items-center">
          <div className="bg-[#232731] h-[15px] my-4 ml-2 w-1/3 rounded-md"></div>
        </div>
      ) : (
        <div className="flex justify-around items-center text-[20px] max-h-[30px] h-full">
          <Like
            like={props.liked}
            likesNum={props.likesNum}
            user_id={props.user}
            post_id={props.id}
            refetch={props.refetch}
          />

          {/* <div
            className="flex flex-row items-center cursor-pointer"
            onClick={liked ? () => removeLike() : () => addLike()}
          >
            <div className={`icon hover:icon_green`}>
              <AiOutlineArrowUp
                className={`fill-[#A8B3CF] ${liked && "fill-[#1aaa67]"}`}
              />
            </div>
            <p
              className={`text-[16px] font-medium mt-[4px] text-[#A8B3CF] pl-[2px] ${
                likesNumber === 0
                  ? "hidden"
                  : `${liked ? "text-[#1aaa67]" : "text-[#A8B3CF]"}`
              }`}
            >
              {likesNumber}
            </p>
          </div> */}

          <div className="icon hover:icon_green">
            <AiOutlineMessage className="fill-[#A8B3CF] " />
          </div>

          {showDropDown && (
            <DropDownMore
              refetch={props.refetch}
              refetchBookmarks={props.refetchBookmarks}
              user_id={props.user}
              post_id={props.id}
              bookmarked={props.bookmarked}
              setShowDropDown={setShowDropDown}
              showDropDown={showDropDown}
            />
          )}

          <div
            className="icon hover:bg-dark hover:icon_green mr-4"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <AiOutlineMore className="text-[22px] fill-[#A8B3CF]  cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActicleBlock;
