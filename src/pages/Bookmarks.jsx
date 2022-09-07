import { UserAuth } from "../context/AuthContext";
import Articles from "../components/Articles/Articles";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARK_BY_USER_ID } from "../query/getBookmarkByUserID";
import { GET_ALL_POSTS } from "../query/posts";
import { useState, useEffect } from "react";

const Bookmarks = () => {
  const { user } = UserAuth();

  const { loading, error, data } = useQuery(GET_BOOKMARK_BY_USER_ID, {
    variables: { id: user.uid },
  });


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getBookmarkByUserID.map((e) => (e = e.post_id)));
    }
  }, [data]);

  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full px-4">
      <h1 className="pl-6 pt-8 pb-3 text-white text-xl font-semibold leading-tight">
        Your Bookmarks
      </h1>
      <Articles posts={posts} />
    </div>
  );
};
export default Bookmarks;
