import {
  AiOutlineEnter,
  AiOutlineMore,
  AiOutlineArrowUp,
  AiOutlineMessage,
} from "react-icons/ai";

import { useRef, useState,useEffect } from "react";
import { useHover } from "usehooks-ts";
import Author from "../Author";
import DateOfPosting from "../Date";
import DropDownMore from "../DropDownMore";
import { ADD_LIKE } from "../../mutations/addLike";
import { REMOVE_LIKE } from "../../mutations/removeLike";
import { useMutation } from "@apollo/client";

const ActicleBlock = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const date = new Date(parseInt(props.createdAt));
  const postDate = date.toString().split(" ").slice(1, 4);

  const [newLike] = useMutation(ADD_LIKE);
  const [deleteLike] = useMutation(REMOVE_LIKE);



  function addLike() {
    try {
      newLike({
        variables: {
          user_id: props.user,
          post_id: props.id,
        },
      });
      props.refetch()
    } catch (error) {
      console.log(error);
    }
  }

  const removeLike = () => {
    try {
      deleteLike({
        variables: {
          user_id: props.user,
          post_id: props.id,
        },
      });
      props.refetch()
    } catch (error) {
      console.log(error);
    }
  };

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
        <DateOfPosting readTime={props.readTime} postDate={postDate} />
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
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={props.liked ? () => removeLike() : () => addLike()}
          >
            <div className={`icon hover:icon_green`}>
              <AiOutlineArrowUp
                className={`fill-[#A8B3CF] ${props.liked && "fill-[#1aaa67]"}`}
              />
            </div>
            <p
              className={`text-[16px] font-medium mt-[4px] text-[#A8B3CF] pl-[2px] ${
                props.likesNum === 0
                  ? "hidden"
                  : `${props.liked ? "text-[#1aaa67]" : "text-[#A8B3CF]"}`
              }`}
            >
              {props.likesNum}
            </p>
          </div>

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
