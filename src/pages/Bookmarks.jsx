import Articles from "../components/Articles/Articles";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARKS_BY_USER_ID } from "../query/getBookmarksByUserID";
import { useState, useEffect } from "react";

const Bookmarks = ({ user, refetch }) => {
  const {
    loading,
    error,
    data,
    refetch: refetchBookmarks,
  } = useQuery(GET_BOOKMARKS_BY_USER_ID, {
    variables: { user_id: user.uid },
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getBookmarks);
      // setPosts(data.getBookmarkByUserID.map((e) => (e = e.post_id)));
    }
  }, [data]);

  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full px-4">
      <h1 className="pl-6 pt-8 pb-3 text-white text-xl font-semibold leading-tight">
        Your Bookmarks
      </h1>
      <Articles
        user={user}
        posts={posts}
        refetch={refetch}
        refetchBookmarks={refetchBookmarks}
      />
    </div>
  );
};
export default Bookmarks;
