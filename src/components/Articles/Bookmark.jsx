import { useMutation, useQuery } from "@apollo/client";

import { BookmarkFilledIcon } from "../../icons/BookmarkFilledIcon";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { ADD_BOOKMARK } from "../../mutations/addBookmark";
import { REMOVE_BOOKMARK } from "../../mutations/removeBookmark";
import { GET_BOOKMARKS } from "../../query/getBookmarks";
import { useState, useEffect } from "react";

const Bookmark = ({ bookmark, user_id, post_id, refetch }) => {
  const [newBookmark] = useMutation(ADD_BOOKMARK);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);

  const { refetch: refetchBookmarks } = useQuery(GET_BOOKMARKS, {
    variables: { user_id: user_id },
  });

  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(bookmark);
  }, [bookmark]);

  const addBookmark = async () => {
    try {
      setBookmarked(true);
      
      await newBookmark({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });

      await refetch();
      await refetchBookmarks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async () => {
    try {
      setBookmarked(false);

      await removeBookmark({
        variables: {
          user_id: user_id,
          post_id: post_id,
        },
      });
      await refetch();
      await refetchBookmarks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div
        className={`flex flex-row items-center cursor-pointer w-full ${
          bookmarked && "icon_green"
        }`}
        onClick={bookmarked ? () => deleteBookmark() : () => addBookmark()}
      >
        {bookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </div>
    </div>
  );
};
export default Bookmark;
