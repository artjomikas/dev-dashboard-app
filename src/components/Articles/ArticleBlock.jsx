import { AiOutlineEnter } from "react-icons/ai";

import { useRef } from "react";
import { useHover } from "usehooks-ts";

const ActicleBlock = (props) => {
  const author = props.author;

  const date = new Date(parseInt(props.createdAt));
  const postDate = date.toString().split(" ").slice(1, 4);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
      ref={hoverRef}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 cursor-pointer break-words">
          <img
            src={author.imageURL}
            alt="Avatar of user who made a post"
            className="flex h-8 w-8 md:h-6  md:w-6 rounded-full"
          />
          <div className="flex flex-col ">
            <p className="text-[13px] font-bold leading-[11px]">
              {author.name}
            </p>
            <p className="text-[#A8B3CF] text-[11px]">{author.username}</p>
          </div>
        </div>

        <div className={isHover ? `opacity-100` : `opacity-0`}>
          <a href={props.permaLink} target="_blank">
            <button className="bg-white px-3 py-2  rounded-[8px] ">
              <div className="flex flex-row items-center gap-1">
                <p className="text-black font-semibold text-[12px]">Go</p>
                <AiOutlineEnter className="fill-black text-sm mb-[2px] text-[10px]" />
              </div>
            </button>
          </a>
        </div>
      </div>

      <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 mb-8 leading-[27px] cursor-pointer">
        {props.title}
      </p>

      <div className="flex flex-1 flex-col mb-4 cursor-pointer">
        <div className="flex-1"></div>
        <div className="flex items-center text-[#A8B3CF] text-[12px] ">
          {postDate.slice(0,2).join(" ")}, {postDate.slice(2,3).join(" ")} - {props.readTime}m read time
        </div>
      </div>

      <div className="flex flex-1 flex-col cursor-pointer mb-3">
        <img
          src={props.imageURL}
          alt="Image of article"
          className="object-cover h-40 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ActicleBlock;
