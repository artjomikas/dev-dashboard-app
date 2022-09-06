import {
  AiOutlineEnter,
  AiOutlineMore,
  AiOutlineLike,
  AiOutlineMessage,
} from "react-icons/ai";

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import Author from "../Author";
import DateOfPosting from "../Date";
import { UserAuth } from "../../context/AuthContext";
import { ADD_BOOKMARK } from "../../mutations/addBookmark";
import { useMutation } from "@apollo/client";

const ActicleBlock = (props) => {
  const author = props.author;

  const date = new Date(parseInt(props.createdAt));
  const postDate = date.toString().split(" ").slice(1, 4);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { user } = UserAuth();

  const [newBookmark] = useMutation(ADD_BOOKMARK);

  const addBookmark = () => {
    newBookmark({
      variables: {
        input: {
          user_id: user.uid,
          post_id: props.id,
        },
      },
    });
  };

  const add = () => {
    try {
      addBookmark();
      console.log("added!")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
      ref={hoverRef}
    >
      <div className="flex flex-row justify-between">
        <Author author={author} />

        <div className={isHover ? `opacity-100` : `opacity-0`}>
          <a href={props.permaLink} target="_blank">
            <button className="bg-white px-3 py-2  rounded-[8px] ">
              <div className="flex flex-row items-center gap-1">
                <p className="text-black font-semibold text-[12px]">Go</p>
                <AiOutlineEnter className="fill-black text-sm mb-[2px] text-[14px]" />
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
        <DateOfPosting readTime={props.readTime} postDate={postDate} />
      </div>

      <div className="flex flex-1 flex-col cursor-pointer mb-3">
        <img
          src={props.imageURL}
          alt="Image of article"
          className="object-cover h-40 rounded-2xl"
        />
      </div>

      <div className="flex justify-between px-6 items-center text-[20px]">
        <AiOutlineLike
          className="fill-[#A8B3CF] cursor-pointer"
          onClick={() => add()}
        />

        <AiOutlineMessage className="fill-[#A8B3CF] cursor-pointer" />

        <AiOutlineMore className="text-[22px] fill-[#A8B3CF]  cursor-pointer" />
      </div>
    </div>
  );
};

export default ActicleBlock;
