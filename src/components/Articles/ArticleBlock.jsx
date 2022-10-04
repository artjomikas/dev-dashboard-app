import { useState } from "react";
import { MessageIcon } from "../../icons/MessageIcon";
import {
  Like,
  Author,
  DateOfPosting,
  Bookmark,
  ExternalLinkButton,
} from "../../index";
import { UserAuth } from "../../context/AuthContext";
import LazyLoad from "react-lazy-load";
import ArticleModal from "../Articles/ArticleModal";

const ActicleBlock = ({
  author,
  permaLink,
  title,
  readTime,
  createdAt,
  imageURL,
  liked,
  likesCount,
  bookmarked,
  _id,
}) => {
  const { userId } = UserAuth();
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
      onMouseEnter={() => {
        !showModal && setIsShown(true);
      }}
      onMouseLeave={() => {
        !showModal && setIsShown(false);
      }}
    >
      {showModal && <ArticleModal setShowModal={setShowModal} id={_id} />}

      <div className="flex flex-row justify-between w-full">
        <Author author={author[0]} />

        <div className={isShown && !showModal ? `opacity-100` : `opacity-0`}>
          <ExternalLinkButton permaLink={permaLink} />{" "}
        </div>
      </div>

      <div
        className="flex flex-1 flex-col"
        onClick={() => setShowModal(!showModal)}
      >
        <p className="font-semibold text-[20px] mt-4 break-words line-clamp-3 mb-1 leading-[27px] cursor-pointer">
          {title}
        </p>

        <div className="flex flex-1 flex-col mb-2 cursor-pointer">
          <div className="flex-1"></div>
          <div className="text-[12px] flex items-center text-[#A8B3CF]">
            <DateOfPosting readTime={readTime} postDate={createdAt} />
          </div>
        </div>

        <div className="flex flex-1 flex-col cursor-pointer mb-2">
          <LazyLoad
            height={160}
            offset={100}
            className="max-w-max items-center flex mx-auto"
          >
            <img
              src={imageURL}
              alt="Image of article"
              className="object-cover h-40 rounded-2xl min-w-content"
            />
          </LazyLoad>
        </div>
      </div>

      {/* <div className="flex max-h-[30px] h-full items-center">
        <div className="bg-[#232731] h-[15px] my-4 ml-2 w-1/3 rounded-md"></div>
      </div> */}

      <div className="flex justify-around items-center text-[20px] max-h-[30px] h-full ">
        <Like
          like={liked}
          likesCount={likesCount}
          post_id={_id}
          user_id={userId}
        />

        <div className="icon hover:icon_green">
          <MessageIcon />
        </div>

        <div className="icon hover:icon_green mr-4">
          <Bookmark bookmark={bookmarked} user_id={userId} post_id={_id} />
        </div>
      </div>
    </div>
  );
};

export default ActicleBlock;
