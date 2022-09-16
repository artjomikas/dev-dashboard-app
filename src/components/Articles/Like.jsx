import { useMutation } from "@apollo/client";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ADD_LIKE } from "../../mutations/addLike";
import { REMOVE_LIKE } from "../../mutations/removeLike";

import { useState, useEffect } from "react";

const Like = ({like, likesNum, user_id, post_id, refetch}) => {
  const [newLike] = useMutation(ADD_LIKE);
  const [deleteLike] = useMutation(REMOVE_LIKE);

  const [liked, setLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);

  useEffect(() => {
    setLiked(like);
    setLikesNumber(likesNum);
  }, []);

  const addLike = async () => {
    try {
      setLiked(true);
      setLikesNumber(likesNumber + 1);
      await newLike({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      setLiked(false);
      setLikesNumber(likesNumber - 1);
      await deleteLike({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
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
    </div>
  );
};
export default Like;
