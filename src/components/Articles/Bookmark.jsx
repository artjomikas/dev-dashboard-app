import { useMutation } from "@apollo/client";

import { BookmarkFilledIcon } from "../../icons/BookmarkFilledIcon";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { ADD_BOOKMARK } from "../../mutations/addBookmark";
import { REMOVE_BOOKMARK } from "../../mutations/removeBookmark";
import { GET_ALL_POSTS } from "../../query/getAllPostsAggregate";
import { GET_BOOKMARKS } from "../../query/getBookmarks";

const Bookmark = ({ bookmark, user_id, post_id }) => {
  const [newBookmark] = useMutation(ADD_BOOKMARK, {
    update(cache) {
      try {
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
              post._id === post_id ? { ...post, bookmarked: true } : post
            ),
          },
        });
      } catch (error) {}
    },
    refetchQueries: [
      {
        query: GET_BOOKMARKS,
        variables: {
          user_id: user_id,
        },
      },
    ],
  });

  const [removeBookmark] = useMutation(REMOVE_BOOKMARK, {
    update(cache) {
      try {
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
              post._id === post_id ? { ...post, bookmarked: false } : post
            ),
          },
        });
      } catch (error) {}
    },
    refetchQueries: [
      {
        query: GET_BOOKMARKS,
        variables: {
          user_id: user_id,
        },
      },
    ],
  });

  const addBookmark = async () => {
    try {
      await newBookmark({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async () => {
    try {
      console.log(post_id);
      await removeBookmark({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div
        className={`flex flex-row items-center cursor-pointer w-full ${
          bookmark && "icon_green"
        }`}
        onClick={bookmark ? () => deleteBookmark() : () => addBookmark()}
      >
        {bookmark ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </div>
    </div>
  );
};
export default Bookmark;
