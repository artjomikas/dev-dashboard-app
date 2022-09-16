import { AiOutlineEnter } from "react-icons/ai";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { MessageIcon } from "../../icons/MessageIcon";
import { Like, Author, DateOfPosting, Bookmark } from "../../index";

const ActicleBlock = ({
  author,
  permaLink,
  title,
  readTime,
  createdAt,
  imageURL,
  liked,
  likesNum,
  bookmarked,
  user,
  id,
  refetch,
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
      ref={hoverRef}
    >
      <div className="flex flex-row justify-between w-full">
        <Author author={author} />

        <div className={isHover ? `opacity-100` : `opacity-0`}>
          <a href={permaLink} target="_blank">
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
        {title}
      </p>

      <div className="flex flex-1 flex-col mb-2 cursor-pointer">
        <div className="flex-1"></div>
        <DateOfPosting readTime={readTime} postDate={createdAt} />
      </div>

      <div className="flex flex-1 flex-col cursor-pointer mb-2">
        <img
          src={imageURL}
          alt="Image of article"
          className="object-cover h-40 rounded-2xl"
        />
      </div>

      {liked == undefined ? (
        <div className="flex max-h-[30px] h-full items-center">
          <div className="bg-[#232731] h-[15px] my-4 ml-2 w-1/3 rounded-md"></div>
        </div>
      ) : (
        <div className="flex justify-around items-center text-[20px] max-h-[30px] h-full ">
          <Like
            like={liked}
            likesNum={likesNum}
            user_id={user}
            post_id={id}
            refetch={refetch}
          />

          <div className="icon hover:icon_green">
            <MessageIcon />
          </div>

          <div className="icon hover:icon_green mr-4">
            <Bookmark
              bookmark={bookmarked}
              user_id={user}
              post_id={id}
              refetch={refetch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActicleBlock;
