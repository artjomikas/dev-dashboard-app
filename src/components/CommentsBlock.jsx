import { useState } from "react";
import { ADD_COMMENT } from "../mutations/addComment";
import { useMutation } from "@apollo/client";
import { UserAuth } from "../context/AuthContext";
import Comment from "./Comment";

const CommentsBlock = ({ id, comments }) => {
  const { userId, user } = UserAuth();

  const [newComment] = useMutation(ADD_COMMENT);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.textContent);
  };

  const addComment = () => {
    try {
      if (userId !== null) {
        newComment({
          variables: {
            input: {
              text: text,
              post_id: id,
              author: {
                _id: user._id,
                imageURL: user.imageURL,
                name: user.name,
              },
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-[#A8B3CF] text-[14px] pt-8">
        <label htmlFor="comment" className="pl-2 mt-2">
          Leave a comment
        </label>

        <span
          onSelect={(e) => {
            e.stopPropagation();
          }}
          onBlur={handleChange}
          id="comment"
          role="textbox"
          className="input__field rounded-xl block border resize-y pb-6 mb-3 mt-2"
          contentEditable="true"
          suppressContentEditableWarning="true"
        >
          {text}
        </span>
      </div>

      <div>
        <button
          className="px-4 py-[8px] bg-[#1aaa67] rounded-[10px] font-semibold leading-[20px] hover:bg-[#2ad887] typo hover:shadow-lg"
          onClick={() => addComment()}
        >
          Add comment
        </button>
      </div>

      <div className="flex flex-col pt-8 mx-3">
  
        {comments?.map((comment, i) => {
          console.log(comment);
          return <Comment key={i} {...comment} index={i} />;
        })}
      </div>
    </>
  );
};
export default CommentsBlock;
