import { AiOutlineClose, AiOutlineShareAlt } from "react-icons/ai";
import { UserAuth } from "../../context/AuthContext";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../query/getPost";
import { useEffect, useState } from "react";
import { Like, DateOfPosting, Bookmark, CommentsBlock } from "../../index";

const ArticleModal = ({ id, setShowModal }) => {
  const { userId } = UserAuth();

  const { loading, data } = useQuery(GET_POST, {
    variables: { user: userId, id: id },
  });

  const [post, setPost] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPost(data.getPost[0]);
    }
  }, [data]);

  return (
    <div
      className="bg-[#ffffff3d] flex justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-100 outline-none px-4 overscroll-y-none"
      onClick={() => {
        const cellText = document.getSelection();
        if (cellText.type === "Caret") {
          // window.history.back();
          setShowModal(false);
        }
      }}
    >
      <div className="h-5/6 overscroll-y-none max-w-screen-md w-full min-w-min">
        <div
          className="relative "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="relative flex flex-col max-w-screen-md w-full min-w-min  bg-dark outline-none rounded-xl shadow-lg px-12 py-8">
            <AiOutlineClose
              className="absolute text-[25px] right-6 fill-primary cursor-pointer"
              // close modal if clicked close icon
              onClick={() => setShowModal(false)}
            />

            <h1 className="text-2xl font-semibold text-white">{post.title}</h1>

            <div className="max-w-[500px] mt-4 border-l-2 border-l-indigo-500  pl-3 items-center flex">
              <h2 className=" text-medium text-primary">
                <span className="text-indigo-500 font-medium">
                  Description:
                </span>
                {post.description}
              </h2>
            </div>

            {post.author != undefined && (
              <div className="pt-6 text-[15px] flex items-center text-[#A8B3CF]">
                <div className="flex flex-row cursor-pointer">
                  <img
                    src={post.author[0].imageURL}
                    alt="Avatar of user who made a post"
                    className="h-8 w-8 md:h-6 md:w-6 rounded-full mx-1"
                  />
                  <p>{post.author[0].name}</p>
                </div>
                <p className="whitespace-pre"> - </p>
                <DateOfPosting
                  readTime={post.readTime}
                  postDate={post.createdAt}
                />
              </div>
            )}

            <div className="py-6 ">
              <img
                src={post.imageURL}
                alt="Image of article"
                className="h-48 rounded-2xl"
              />
            </div>

            <div className="flex flex-row items-center py-3 mt-4 cursor-pointer leading-none justify-between px-8 border-y-[#a8b3cf33] border-y-[0.5px]">
              <div className="flex flex-row items-center shrink-0">
                <Like
                  id="like"
                  like={post.liked}
                  likesCount={post.likesCount}
                  post_id={id}
                  user_id={userId}
                />
                <label
                  htmlFor="like"
                  className={`font-semibold cursor-pointer text-[16px] pl-2 ${
                    post.liked ? "text-[#1aaa67]" : "text-[#A8B3CF]"
                  }`}
                >
                  Vote
                </label>
              </div>

              <div className="flex flex-row items-center">
                <Bookmark
                  bookmark={post.bookmarked}
                  user_id={userId}
                  post_id={id}
                />

                <p
                  className={`font-semibold text-[16px] pl-2 ${
                    post.bookmarked ? "text-[#1aaa67]" : "text-[#A8B3CF]"
                  }`}
                >
                  {post.bookmarked
                    ? "Remove from bookmarks"
                    : "Add to bookmarks"}
                </p>
              </div>

              <div className="icon hover:icon_green mr-4 flex flex-row items-center">
                <AiOutlineShareAlt className="text-[#A8B3CF] text-[20px]" />
                <p className="font-semibold text-[16px] text-[#A8B3CF] pl-2">
                  Share
                </p>
              </div>
            </div>

         
            <CommentsBlock id={id} comments={post.comments} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleModal;
