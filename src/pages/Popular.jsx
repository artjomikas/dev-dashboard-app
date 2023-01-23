import { Articles, AddArticle } from "..";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POPULAR_POSTS } from "../query/getPopularPosts";
import SkeletonArticles from "../components/SkeletonArticles";

const Popular = () => {
  const { userId } = UserAuth();

  const { loading, data } = useQuery(GET_POPULAR_POSTS, {
    variables: { user: userId },
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getPopularPosts);
    }
  }, [data, userId]);

  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full px-4">
      <AddArticle />
      {!loading ? <Articles posts={posts} /> : <SkeletonArticles />}
    </div>
  );
};
export default Popular;
