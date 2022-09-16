import Articles from "../components/Articles/Articles";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARKS } from "../query/getBookmarks";
import { useState, useEffect } from "react";

const Bookmarks = ({ user, refetch }) => {
  const {
    loading,
    data,
    refetch: refetchBookmarks,
  } = useQuery(GET_BOOKMARKS, {
    variables: { user_id: user._id },
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getBookmarks);
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
