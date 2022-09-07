import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOKMARK_BY_USER_ID_AND_POST_ID } from "../query/getBookmarkByUserIDAndPostID";
import { GET_BOOKMARK_BY_USER_ID } from "../query/getBookmarkByUserID";
import { useEffect, useState } from "react";
import { ADD_BOOKMARK } from "../mutations/addBookmark";
import { REMOVE_BOOKMARK } from "../mutations/removeBookmark";

const DropDownMore = (props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkID, setBookmarkID] = useState(false);

  const { loading, error, data, refetch } = useQuery(
    GET_BOOKMARK_BY_USER_ID_AND_POST_ID,
    {
      variables: { user_id: props.user_id, post_id: props.post_id },
    }
  );

  
  const {refetch: refetchUserBookmarks } = useQuery(GET_BOOKMARK_BY_USER_ID, {
    variables: { id: props.user_id },
  });

  const [newBookmark] = useMutation(ADD_BOOKMARK);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);

  const addBookmark = () => {
    try {
      newBookmark({
        variables: {
          input: {
            user_id: props.user_id,
            post_id: props.post_id,
          },
        },
      });

      refetch();
      refetchUserBookmarks();
      props.setShowDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = () => {
    try {
      removeBookmark({
        variables: {
          id: bookmarkID
        },
      });

      refetch();
      refetchUserBookmarks();
      props.setShowDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (data.getBookmarkByUserIDAndPostID.length == 1) {
        setBookmarked(true);
        setBookmarkID(data.getBookmarkByUserIDAndPostID[0].id);
      }
    }
  }, [data]);

  return (
    <div className="absolute">
      <div
        onClick={() => props.setShowDropDown(false)}
        className="fixed inset-0 h-full w-full z-100"
      ></div>

      <div className="absolute left-10 bottom-8 mt-2 w-52 bg-input hover:bg-dark rounded-md overflow-hidden shadow-xl cursor-pointer">
        {!loading ? (
          bookmarked ? (
            <div className="block pl-4 py-2 text-[13px] text-primary text-center">
              <div className="flex items-center gap-1"
              onClick={() => deleteBookmark()}>
                <AiOutlineMinus />
                Remove from bookmarks
              </div>
            </div>
          ) : (
            <div className="block pl-4 pr-1 py-2 text-[13px] text-primary text-center">
              <div
                className="flex items-center gap-1"
                onClick={() => addBookmark()}
              >
                <AiOutlinePlus />
                Add to bookmarks
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default DropDownMore;
