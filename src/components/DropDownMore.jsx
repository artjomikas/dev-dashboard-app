import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useMutation,useQuery } from "@apollo/client";
import { ADD_BOOKMARK } from "../mutations/addBookmark";
import { REMOVE_BOOKMARK } from "../mutations/removeBookmark";
import { GET_BOOKMARKS_BY_USER_ID } from "../query/getBookmarksByUserID";

const DropDownMore = (props) => {
  const [newBookmark] = useMutation(ADD_BOOKMARK);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);

  const {
    loading,
    error,
    data,
    refetch: refetchBookmarks,
  } = useQuery(GET_BOOKMARKS_BY_USER_ID, {
    variables: { user_id: props.user_id },
  });

  const addBookmark = () => {
    try {
      newBookmark({
        variables: {
          user_id: props.user_id,
          post_id: props.post_id,
        },
      });

      props.refetch();
      refetchBookmarks();
      props.setShowDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = () => {
    try {
      removeBookmark({
        variables: {
          user_id: props.user_id,
          post_id: props.post_id,
        },
      });
      props.refetch();
      refetchBookmarks();
      props.setShowDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute">
      <div
        onClick={() => props.setShowDropDown(false)}
        className="fixed inset-0 h-full w-full z-100"
      ></div>

      <div className="absolute -left-24 bottom-8 mt-2 w-52 bg-input hover:bg-dark rounded-md overflow-hidden shadow-xl cursor-pointer">
        {props.bookmarked ? (
          <div className="block pl-4 py-2 text-[13px] text-primary text-center">
            <div
              className="flex items-center gap-1"
              onClick={() => deleteBookmark()}
            >
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
        )}
      </div>
    </div>
  );
};
export default DropDownMore;
