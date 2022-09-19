import { useMutation } from "@apollo/client";
import { UpIcon } from "../../icons/UpIcon";
import { ADD_LIKE } from "../../mutations/addLike";
import { REMOVE_LIKE } from "../../mutations/removeLike";
import { GET_ALL_POSTS } from "../../query/getAllPostsAggregate";


const Like = ({ like, likesCount, user_id, post_id }) => {
  const [newLike] = useMutation(ADD_LIKE, {
    update(cache) {
      const { getAllPosts } = cache.readQuery({
        query: GET_ALL_POSTS,
        variables: {
          user: user_id,
        },
      });

      cache.writeQuery({
        query: GET_ALL_POSTS,
        variables: { user: user_id },
        data: {
          getAllPosts: getAllPosts.map((post) =>
            post._id === post_id
              ? { ...post, liked: true, likesCount: likesCount+1 }
              : post
          ),
        },
      });
    },
  });

  const [deleteLike] = useMutation(REMOVE_LIKE, {
    update(cache) {
      const { getAllPosts } = cache.readQuery({
        query: GET_ALL_POSTS,
        variables: {
          user: user_id,
        },
      });

      cache.writeQuery({
        query: GET_ALL_POSTS,
        variables: { user: user_id },
        data: {
          getAllPosts: getAllPosts.map((post) =>
            post._id === post_id
              ? { ...post, liked: false, likesCount: likesCount - 1 }
              : post
          ),
        },
      });
    },
  });
  
  const addLike = async () => {
    try {
      if (user_id !== null) {
        await newLike({
          variables: {
            user_id: user_id,
            post_id: post_id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      if (user_id !== null) {
        await deleteLike({
          variables: {
            user_id: user_id,
            post_id: post_id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex flex-row items-center cursor-pointer w-full max-w-[40px]"
      onClick={like ? () => removeLike() : () => addLike()}
    >
      <div className={`icon hover:icon_green ${like && "icon_green"}`}>
        <UpIcon />
      </div>
      <p
        className={`text-[16px] font-medium mt-[4px] text-[#A8B3CF] pl-[2px] ${
          likesCount === 0
            ? "hidden"
            : `${like ? "text-[#1aaa67]" : "text-[#A8B3CF]"}`
        }`}
      >
        {likesCount}
      </p>
    </div>
  );
};
export default Like;
